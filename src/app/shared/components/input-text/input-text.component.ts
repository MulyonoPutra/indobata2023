import { Component, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

@Component({
	selector: 'app-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
	@Input() label!: string;
	@Input() fieldName!: string;
	@Input() formGroup!: FormGroup;

	get isInvalid() {
		const control = this.formGroup.get(this.fieldName);
		return control && control.touched && control.invalid;
	}

	get getErrorMessage(): string {
		const control = this.formGroup.get(this.fieldName);
		if (control?.errors?.['required']) {
			return 'This field is required.';
		}
		if (control?.errors?.['email']) {
			return 'Invalid email format.';
		}
		if (control?.errors?.['minlength']) {
			const requiredLength = control.errors['minlength'].requiredLength;
			return `Password should be at least ${requiredLength} characters long.`;
		}
    if (control?.errors?.['passwordMismatch']) {
      return 'Passwords do not match.';
    }

		return '';
	}
}
