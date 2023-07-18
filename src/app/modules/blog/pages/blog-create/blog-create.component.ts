import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpResponseEntity, ResponseMessageEntity } from 'src/app/core/domain/http-response-entity';
import { Subject, take, takeUntil, timer } from 'rxjs';

import { Article } from 'src/app/core/domain/article';
import { ArticleService } from 'src/app/core/services/article.service';
import { Category } from 'src/app/core/domain/category';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { MessageService } from 'primeng/api';
import { StaticText } from 'src/app/shared/constants/static-text';

@Component({
	selector: 'app-blog-create',
	templateUrl: './blog-create.component.html',
	styleUrls: ['./blog-create.component.scss'],
	providers: [MessageService],
})
export class BlogCreateComponent implements OnInit, OnDestroy {
	public form!: FormGroup;
	private destroySubject = new Subject<void>();
	protected header = StaticText.articlesHeader;
	protected categories!: Category[];
	protected article!: Article;
	protected isSubmitting: boolean = false;
	protected imagesForm!: string;

	constructor(
		private formBuilder: FormBuilder,
		private articleService: ArticleService,
		private formUtils: FormUtilService,
		private router: Router,
		private route: ActivatedRoute,
		private messageService: MessageService
	) {}

	ngOnInit(): void {
		this.initialize();
	}

	get articleIdentity(): string {
		return this.route.snapshot.paramMap.get('id')!;
	}

	private initialize() {
		this.formInitialized();
		this.findCategories();
		if (this.articleIdentity) {
			timer(500)
				.pipe(take(1))
				.subscribe(() => {
					this.findById();
				});
		}
	}

	private formInitialized() {
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

	protected prepopulateForms(article: Article): void {
		this.imagesForm = article.images.url;
		this.form.patchValue({
			title: article.title,
			subtitle: article.subtitle,
			content: article.content,
			tags: article.tags,
			category: article.category && article.category.name && article.category._id,
			images: article.images.url,
		});
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
				error: (error) => this.messageService.add({ severity: 'error', summary: 'Error', detail: error }),
				complete: () => {},
			});
	}

	private findById() {
		this.articleService
			.findById(this.articleIdentity)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
				next: (response: HttpResponseEntity<Article>) => {
					this.prepopulateForms(response.data);
				},
				error: (error) => this.messageService.add({ severity: 'error', summary: 'Error', detail: error }),
				complete: () => {},
			});
	}

	protected onSubmit(): void {
		console.log(this.formCtrlValue.category);
		if (this.form.valid) {
			this.onProcessSave();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}

	onProcessSave(): void {
		if (this.articleIdentity) {
			this.update();
		} else {
			this.loadingIndicator();
			this.save();
		}
	}

	private setFormData() {
		const formData = new FormData();
		formData.append('title', this.formCtrlValue.title);
		formData.append('subtitle', this.formCtrlValue.subtitle);
		formData.append('content', this.formCtrlValue.content);
		formData.append('tags', this.formCtrlValue.tags);
		formData.append('category[id]', this.formCtrlValue.category);
		formData.append('images', this.formCtrlValue.images);
		return formData;
	}

	private update() {
		console.log(this.formCtrlValue.category);
	}

	private save(): void {
		const formData = this.setFormData();
		this.articleService.create(formData).subscribe({
			next: (response: ResponseMessageEntity) => {
				this.messageService.add({ severity: 'success', summary: 'Success', detail: response.message });
			},
			error: (error) => this.messageService.add({ severity: 'error', summary: 'Error', detail: error }),
			complete: () => {
				this.form.reset();
				this.navigateAfterSucceed();
			},
		});
	}

	private navigateAfterSucceed(): void {
		this.router.navigate(['/blog']).then(() => window.location.reload());
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
