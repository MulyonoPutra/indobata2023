import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

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
}
