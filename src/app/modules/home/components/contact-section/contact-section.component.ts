import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take, timer } from 'rxjs';

import { Contact } from 'src/app/core/domain/contact';
import { ContactService } from 'src/app/core/services/contact.service';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { StaticText } from 'src/app/shared/constants/static-text';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-contact-section',
	templateUrl: './contact-section.component.html',
	styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
	protected form!: FormGroup;
	isSubmitting = false;
	greetings = StaticText.contact;

	constructor(private fb: FormBuilder, private validator: ValidatorsService, private feedback: ContactService) {}

	ngOnInit(): void {
		this.initForms();
	}

	protected initForms(): void {
		this.form = this.fb.group({
			fullname: ['', [Validators.required, Validators.minLength(3)]],
			phone: ['', [Validators.required, this.validator.indonesianPhoneNumber()]],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required],
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

	getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	private submit(): void {
		this.feedback.submitFeedback(this.formCtrlValue).subscribe({
			next: (response: HttpResponseEntity<Contact>) => {
				console.log(response.message);
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	private delay(): void {
		timer(2000)
			.pipe(take(1))
			.subscribe(() => {
				this.isSubmitting = false;
				this.form.reset();
			});
	}

	protected save(): void {
		if (this.form.valid) {
			this.isSubmitting = true;
			this.submit();
			this.delay();
		} else {
			this.markAllFormControlsAsTouched(this.form);
		}
	}

	private markAllFormControlsAsTouched(formGroup: FormGroup) {
		Object.values(formGroup.controls).forEach((control) => {
			control.markAsTouched();
			if (control instanceof FormGroup) {
				this.markAllFormControlsAsTouched(control);
			}
		});
	}
}
