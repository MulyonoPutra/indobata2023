import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class ValidatorsService {
	constructor() {}

	indonesianPhoneNumber(): ValidatorFn {
		return (control: AbstractControl): { [key: string]: any } | null => {
			const phoneNumberPattern = /^0\d{9,15}$/; // Indonesian phone number pattern with "0" as the starting digit
			const valid = phoneNumberPattern.test(control.value);
			return valid ? null : { invalidPhoneNumber: true };
		};
	}

  passwordMatchValidator(formGroup: FormGroup) {
		const password = formGroup.get('password')!;
		const confirmPassword = formGroup.get('confirmPassword')!;

		if (password.value !== confirmPassword.value) {
			confirmPassword.setErrors({ mustMatch: true });
		} else {
			confirmPassword.setErrors(null);
		}
	}
}
