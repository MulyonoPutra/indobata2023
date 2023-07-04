import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { take, timer } from 'rxjs';
import { Login } from 'src/app/core/domain/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { FormUtilService } from 'src/app/shared/services/form-util.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

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

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private validations: ValidatorsService,
		private authService: AuthService,
    private formUtils: FormUtilService,
	) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
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
