import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ValidatorsService } from '../../services/validators.service';

@Component({
	selector: 'app-input-text',
	templateUrl: './input-text.component.html',
	styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent {
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
