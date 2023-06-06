import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { timer, take } from 'rxjs';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	protected form!: FormGroup;
	isSubmitting = false;

	constructor(
		private fb: FormBuilder,
		private validator: ValidatorsService
	) {}

	ngOnInit(): void {
		this.initForms();
	}

	protected initForms(): void {
		this.form = this.fb.group({
			fullname: ['', Validators.required],
			phone: [
				'',
				[Validators.required, this.validator.indonesianPhoneNumber()],
			],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(6)]],
		});
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
		} else {
			this.markAllFormControlsAsTouched(this.form);
		}
	}

	markAllFormControlsAsTouched(formGroup: FormGroup) {
		Object.values(formGroup.controls).forEach((control) => {
			control.markAsTouched();
			if (control instanceof FormGroup) {
				this.markAllFormControlsAsTouched(control);
			}
		});
	}
}
