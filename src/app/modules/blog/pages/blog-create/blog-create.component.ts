import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

import { Article } from 'src/app/core/domain/article';
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
	private destroy$ = new Subject<void>();
	public form!: FormGroup;
	protected header = StaticText.articlesHeader;
	protected categories!: Category[];

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
			images: [null, Validators.required],
		});
	}

	get formCtrlValue() {
		return {
			title: this.form.get('title')?.value,
			subtitle: this.form.get('title')?.value,
			content: this.form.get('content')?.value,
			tags: this.form.get('tags')?.value,
			category: this.form.get('category')?.value,
			images: this.form.get('images')?.value,
		};
	}

	private setFormData() {
		const formData = new FormData();

		formData.append('title', this.formCtrlValue.title!);
		formData.append('subtitle', this.formCtrlValue.subtitle!);
		formData.append('content', this.formCtrlValue.content!);

		const tags: string[] | undefined = this.formCtrlValue.tags;

		if (tags) {
			tags.forEach((value, index) => {
				formData.append(`tags[${index}]`, value);
			});
		}
    // formData.append('tags', this.formCtrlValue.tags);
		formData.append('category[id]', this.formCtrlValue.category?._id!);
		formData.append('images', this.formCtrlValue.images);

    // formData.forEach((value, key) => {
    //   console.log(`${key}:`, value);
    // });

    return formData;
	}

	onSubmit() {
    this.setFormData()
	}

	onUpload(file: File): void {
		this.form.get('images')?.setValue(file);
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

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
