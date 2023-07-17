import { Component, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';

import { Article } from 'src/app/core/domain/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
	private destroy$ = new Subject<void>();
	protected loading$!: Observable<boolean>;

	protected articles!: Article[];
	protected page: number = 0;
	protected totalPages!: number;
	protected totalItems!: number;
	protected limit: number = 6;
	protected loadingIndicator: boolean = false;

	ngOnInit(): void {
		this.findAll();
	}

	constructor(private articleService: ArticleService, public loadingService: LoadingService) {}

	findAll(): void {
		this.articleService
			.findAll()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: HttpResponseEntity<Article[]>) => {
					this.articles = response.data;
					this.totalPages = response.paging.totalPages!;
					this.totalItems = response.paging.total!;
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	trackById(index: number, item: Article): string {
		return item._id!;
	}

	protected onPageChanged(page: number): void {
		this.page = page;
		this.findAll();
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
