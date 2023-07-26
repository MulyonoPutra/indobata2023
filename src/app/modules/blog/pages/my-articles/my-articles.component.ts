import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Observable, Subject, takeUntil } from 'rxjs';
import { HttpResponseEntity, ResponseMessageEntity } from 'src/app/core/domain/http-response-entity';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Article } from 'src/app/core/domain/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ConfirmDialogService } from 'src/app/shared/services/confirm-dialog.service';

@Component({
	selector: 'app-my-articles',
	templateUrl: './my-articles.component.html',
	styleUrls: ['./my-articles.component.scss'],
	providers: [ConfirmationService, MessageService],
})
export class MyArticlesComponent implements OnInit, OnDestroy {
	private destroySubject = new Subject<void>();
	protected loading$!: Observable<boolean>;

	protected articles!: Article[];
	protected page: number = 0;
	protected totalPages!: number;
	protected totalItems!: number;
	protected limit: number = 6;
	protected loadingIndicator: boolean = false;

	ngOnInit(): void {
		this.loadAll();
	}

	constructor(
		private articleService: ArticleService,
		public loadingService: LoadingService,
		private storage: StorageService,
		private router: Router,
		private alertService: AlertService,
		private dialog: ConfirmDialogService
	) {}

	get userIdentity(): string {
		return this.storage.getId();
	}

	protected trackById(index: number, item: Article): string {
		return item._id!;
	}

	private loadAll() {
		this.articleService
			.findArticlesByUserId(this.userIdentity)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
				next: (response: HttpResponseEntity<Article[]>) => {
					this.articles = response.data;
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
				},
				complete: () => {
					// Do Nothing
				},
			});
	}

	protected confirm(modalTemplate: TemplateRef<any>, id: string): void {
		this.dialog.open(modalTemplate, { size: 'lg', title: 'Delete Confirmation' }).subscribe((action) => {
			this.remove(id);
		});
	}

	private remove(id: string): void {
		this.articleService
			.remove(id)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
				next: (response: ResponseMessageEntity) => {
					this.alertService.success('Success', response.message);
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
				},
				complete: () => {
					this.loadAll();
				},
			});
	}

	protected edit(id: string) {
		this.router.navigate(['blog-update/' + id]);
	}

	protected navigate(id: string) {
		this.router.navigate(['blog-detail/' + id]);
	}

	ngOnDestroy(): void {
		this.destroySubject.next();
		this.destroySubject.complete();
	}
}
