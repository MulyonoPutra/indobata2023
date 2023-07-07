import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
	providedIn: 'root',
})
export class FormUtilService {
	constructor() {}

	markAllFormControlsAsTouched(formGroup: FormGroup): void {
		Object.values(formGroup.controls).forEach((control: AbstractControl) => {
			control.markAsTouched();
			if (control instanceof FormGroup) {
				this.markAllFormControlsAsTouched(control);
			}
		});
	}
}
