import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Article } from 'src/app/core/domain/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';

@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
	protected article?: Article;
	private destroySubject = new Subject<void>();

	constructor(
		private articleService: ArticleService,
		private route: ActivatedRoute,
		private alertService: AlertService
	) {}

	ngOnInit(): void {
		this.findById();
	}

	findById(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.articleService
			.findById(id)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
				next: (response: HttpResponseEntity<Article>) => {
					this.article = response.data;
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
				},
			});
	}

	ngOnDestroy(): void {
		this.destroySubject.next();
		this.destroySubject.complete();
	}
}
