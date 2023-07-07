import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, take, takeUntil, timer } from 'rxjs';
import { Contact } from 'src/app/core/domain/contact';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { ContactService } from 'src/app/core/services/contact.service';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	protected form!: FormGroup;
	protected isSubmitting = false;
	protected contactInformation!: Partial<Contact>;
	private destroy$ = new Subject<void>();

	constructor(
		private fb: FormBuilder,
		private validator: ValidatorsService,
		private contactService: ContactService,
		private formUtils: FormUtilService
	) {}

	ngOnInit(): void {
		this.initialized();
	}

	private initialized(): void {
		this.formInit();
		this.getContactInfo();
	}

	protected formInit(): void {
		this.form = this.fb.group({
			fullname: ['', Validators.required],
			phone: ['', [Validators.required, this.validator.indonesianPhoneNumber()]],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	get formCtrlValue(): Contact {
		return {
			fullname: this.form.get('fullname')?.value,
			phone: this.form.get('phone')?.value,
			email: this.form.get('email')?.value,
			message: this.form.get('message')?.value,
		};
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	private submit(): void {
		this.contactService.submitFeedback(this.formCtrlValue).subscribe({
			next: (response: HttpResponseEntity<Contact>) => {
				console.log(response.message);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	protected getContactInfo(): void {
		this.contactService
			.contactInfo()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: HttpResponseEntity<Partial<Contact>>) => {
					this.contactInformation = response.data;
				},
				error: (error) => {
					console.error(error);
				},
			});
	}

	private loadingIndicator(): void {
		this.isSubmitting = true;
		timer(2000)
			.pipe(take(1))
			.subscribe(() => {
				this.isSubmitting = false;
			});
	}

	protected save(): void {
		if (this.form.valid) {
			this.submit();
			this.loadingIndicator();
			this.form.reset();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}
}
