import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil, timer } from 'rxjs';

import { ArticleService } from 'src/app/core/services/article.service';
import { Category } from 'src/app/core/domain/category';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { Router } from '@angular/router';
import { StaticText } from 'src/app/shared/constants/static-text';

@Component({
	selector: 'app-blog-create',
	templateUrl: './blog-create.component.html',
	styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit, OnDestroy {
	public form!: FormGroup;
	private destroySubject = new Subject<void>();
	protected header = StaticText.articlesHeader;
	protected categories!: Category[];
	protected isSubmitting: boolean = false;

	constructor(
		private formBuilder: FormBuilder,
		private articleService: ArticleService,
		private formUtils: FormUtilService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.formInitialized();
		this.findCategories();
	}

	private formInitialized() {
		this.form = this.formBuilder.group({
			title:    ['', Validators.required],
			subtitle: ['', Validators.required],
			content:  ['', Validators.required],
			tags:     ['', Validators.required],
			category: ['', Validators.required],
			images:   [null, Validators.required],
		});
	}

	get formCtrlValue() {
		return {
			title:    this.form.get('title')?.value,
			subtitle: this.form.get('title')?.value,
			content:  this.form.get('content')?.value,
			tags:     this.form.get('tags')?.value,
			category: this.form.get('category')?.value,
			images:   this.form.get('images')?.value,
		};
	}

	protected onUpload(file: File): void {
		this.form.get('images')?.setValue(file);
	}

	private findCategories() {
		this.articleService
			.findCategories()
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
				next: (response: HttpResponseEntity<Category[]>) => {
					this.categories = response.data;
				},
			});
	}

	private setFormData() {
		const formData = new FormData();
		formData.append('title', this.formCtrlValue.title);
		formData.append('subtitle', this.formCtrlValue.subtitle);
		formData.append('content', this.formCtrlValue.content);
		formData.append('tags', this.formCtrlValue.tags);
		formData.append('category[id]', this.formCtrlValue.category?._id);
		formData.append('images', this.formCtrlValue.images);
		return formData;
	}

	protected onProcessSave(): void {
		if (this.form.valid) {
			this.loadingIndicator();
			this.submitToServer();
			this.form.reset();
			this.navigateAfterSucceed();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}

	private submitToServer(): void {
		const formData = this.setFormData();
		this.articleService.create(formData).subscribe({
			next: () => {},
			error: (error) => console.error(error),
			complete: () => {},
		});
	}

	private navigateAfterSucceed(): void {
		this.router.navigate(['/']).then(() => {
			window.location.reload();
		});
	}

	private loadingIndicator(): void {
		this.isSubmitting = true;
		timer(2000)
			.pipe(take(1))
			.subscribe(() => (this.isSubmitting = !this.isSubmitting));
	}

	ngOnDestroy(): void {
		this.destroySubject.next();
		this.destroySubject.complete();
	}
}
