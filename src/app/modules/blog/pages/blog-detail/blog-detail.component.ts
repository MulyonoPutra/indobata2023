import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/core/domain/article';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { ArticleService } from 'src/app/core/services/article.service';

@Component({
	selector: 'app-blog-detail',
	templateUrl: './blog-detail.component.html',
	styleUrls: ['./blog-detail.component.scss'],
})
export class BlogDetailComponent implements OnInit, OnDestroy {
	protected article?: Article;
	private destroy$ = new Subject<void>();

	constructor(private articleService: ArticleService, private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.findById();
	}

	findById(): void {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.articleService
			.findById(id)
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: HttpResponseEntity<Article>) => {
					this.article = response.data;
				},
				error: (error) => {
					console.log(error);
				},
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
