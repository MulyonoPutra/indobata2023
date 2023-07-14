import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take, timer } from 'rxjs';

import { AuthService } from 'src/app/core/services/auth.service';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/core/domain/login';
import { Router } from '@angular/router';
import { StaticImages } from 'src/app/shared/constants/static-images';
import { StaticText } from 'src/app/shared/constants/static-text';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
	protected form!: FormGroup;
	protected isSubmitting = false;
	protected cover = StaticImages.loginCover;
	protected greetings = StaticText.login;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private validations: ValidatorsService,
		private authService: AuthService,
		private formUtils: FormUtilService
	) {}

	ngOnInit(): void {
		this.formInitialized();
	}

	formInitialized(): void {
		this.form = this.fb.group(
			{
				email: ['', [Validators.required, Validators.email]],
				password: ['', Validators.required],
				confirmPassword: ['', [Validators.required]],
			},
			{ validator: this.validations.passwordMatchValidator }
		);
	}

	get formCtrlValue(): Login {
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

	protected onLoginProcess(): void {
		if (this.form.valid) {
			this.isSubmitting = true;
			this.onDelay();
			this.onSubmit();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}

	protected onSubmit(): void {
		this.authService.login(this.formCtrlValue).subscribe({
			next: () => {
				timer(2000)
					.pipe(take(1))
					.subscribe(() => this.router.navigateByUrl('/'));
			},
			error: (error: HttpErrorResponse) => {
				alert(error.message);
			},
		});
	}
}
