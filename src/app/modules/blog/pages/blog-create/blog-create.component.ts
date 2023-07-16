import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { ArticleService } from 'src/app/core/services/article.service';
import { Category } from 'src/app/core/domain/category';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { StaticText } from 'src/app/shared/constants/static-text';

@Component({
	selector: 'app-blog-create',
	templateUrl: './blog-create.component.html',
	styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit, OnDestroy {
	form!: FormGroup;
	contents: string = '';
	protected header = StaticText.articlesHeader;
	private destroy$ = new Subject<void>();
	categories!: Category[];

	constructor(private formBuilder: FormBuilder, private articleService: ArticleService) {}

	ngOnInit(): void {
		this.formInitialized();
		this.findCategories();
	}

	formInitialized() {
		this.form = this.formBuilder.group({
			title: ['', Validators.required],
			subtitle: ['', Validators.required],
			content: ['', Validators.required],
			tags: ['', Validators.required],
			category: ['', Validators.required],
		});
	}

	get formCtrlValue() {
		return {
			title: this.form.get('title')?.value,
			subtitle: this.form.get('title')?.value,
			content: this.form.get('content')?.value,
			tags: this.form.get('tags')?.value,
			category: this.form.get('category')?.value,
		};
	}

	onSubmit() {
		console.log(this.formCtrlValue);
		console.log(this.form.dirty);
	}

	handleFileUploaded(file: File): void {
		// Do something with the uploaded file
		console.log(file);
	}

	findCategories() {
		this.articleService
			.findCategories()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: HttpResponseEntity<Category[]>) => {
					this.categories = response.data;
				},
			});
	}

	dropdownOptions = [
		{ label: 'Option 1', value: 'option1' },
		{ label: 'Option 2', value: 'option2' },
		{ label: 'Option 3', value: 'option3' },
	];

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
