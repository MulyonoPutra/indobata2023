import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { ValidatorsService } from '../../services/validators.service';

@Component({
	selector: 'app-input-password',
	templateUrl: './input-password.component.html',
	styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent {
	@Input() label!: string;
	@Input() fieldName!: string;
	@Input() formGroup!: FormGroup;

	constructor(private validation: ValidatorsService) {}

	get isInvalid() {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.isInvalid(control);
	}

	get getErrorMessage(): string {
		const control = this.formGroup.get(this.fieldName) as FormControl;
		return this.validation.getErrorMessage(control);
	}
}
