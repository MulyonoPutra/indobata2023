import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { timer, take } from 'rxjs';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	protected form!: FormGroup;
	protected isSubmitting = false;
	protected bgCover =
		'https://www.hsimagazine.com/wp-content/uploads/2020/01/iStock-1028568006.jpg';

	constructor(private fb: FormBuilder, private router: Router) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.form = this.fb.group({
			email: ['', [Validators.required, Validators.email]],
			password: ['', Validators.required],
		});
	}

	get formCtrlValue() {
		return {
			email: this.form.get('email')?.value,
			password: this.form.get('password')?.value,
		};
	}

	getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

	onDelay() {
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
			this.onDelay();
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
