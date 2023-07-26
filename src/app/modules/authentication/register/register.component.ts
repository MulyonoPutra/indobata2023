import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { take, timer } from 'rxjs';

import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Register } from 'src/app/core/domain/register';
import { AuthService } from 'src/app/core/services/auth.service';
import { StaticImages } from 'src/app/shared/constants/static-images';
import { AlertService } from 'src/app/shared/services/alert.service';
import { FormUtilService } from 'src/app/shared/services/form-util.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
	protected form!: FormGroup;
	protected isSubmitting = false;
	protected bgCover = StaticImages.bgCover;

	constructor(
		private fb: FormBuilder,
		private router: Router,
		private authService: AuthService,
		private formUtils: FormUtilService,
		private alertService: AlertService
	) {}

	ngOnInit(): void {
		this.initForm();
	}

	initForm(): void {
		this.form = this.fb.group({
			username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
			email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.min(6), Validators.maxLength(20)]],
		});
	}

	get formCtrlValue(): Register {
		return {
			username: this.form.get('username')?.value,
			email: this.form.get('email')?.value,
			password: this.form.get('password')?.value,
		};
	}

	formCtrl(form: string): FormControl {
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

	protected onRegisterProcess(): void {
		if (this.form.valid) {
			this.isSubmitting = true;
			this.onSubmit();
			this.onDelay();
		} else {
			this.formUtils.markAllFormControlsAsTouched(this.form);
		}
	}

	protected onSubmit(): void {
		this.authService.register(this.formCtrlValue).subscribe({
			next: () => {
				this.navigateAfterSucceed();
			},
			error: (error: HttpErrorResponse) => {
				this.alertService.errors('Error', error.message);
			},
		});
	}

	navigateAfterSucceed(): void {
		timer(2000)
			.pipe(take(1))
			.subscribe(() => this.router.navigateByUrl('/login'));
	}
}
