import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormBuilder,
	FormControl,
	FormGroup,
	ValidatorFn,
	Validators,
} from '@angular/forms';
import { timer, take } from 'rxjs';

@Component({
	selector: 'app-contact-section',
	templateUrl: './contact-section.component.html',
	styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
	protected form!: FormGroup;
	isSubmitting = false;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.initForms();
	}

	protected initForms(): void {
		this.form = this.fb.group({
			fullname: ['', Validators.required],
			phone: [
				'',
				[Validators.required, this.indonesianPhoneNumberValidator()],
			],
			email: ['', [Validators.required, Validators.email]],
			message: ['', Validators.required],
		});
	}

	indonesianPhoneNumberValidator(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const phoneNumberPattern = /^0\d{9,15}$/; // Indonesian phone number pattern with "0" as the starting digit
			const valid = phoneNumberPattern.test(control.value);
			return valid ? null : { invalidPhoneNumber: true };
		};
	}

	get formCtrlValue() {
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

	protected save(): void {
		if (this.form.valid) {
			this.isSubmitting = true;

			timer(2000)
				.pipe(take(1))
				.subscribe(() => {
					this.isSubmitting = false;
					this.form.reset();
				});
		}
	}
}
