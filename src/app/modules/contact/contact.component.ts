import { Component, OnInit } from '@angular/core';
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { timer, take } from 'rxjs';
import { Contact } from 'src/app/core/domain/contact';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { ContactService } from 'src/app/core/services/contact.service';
import { ValidatorsService } from 'src/app/shared/services/validators.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
	protected form!: FormGroup;
	isSubmitting = false;

	constructor(
		private fb: FormBuilder,
		private validator: ValidatorsService,
    private feedback: ContactService
	) {}

	ngOnInit(): void {
		this.initForms();
	}

	protected initForms(): void {
		this.form = this.fb.group({
			fullname: ['', Validators.required],
			phone: [
				'',
				[Validators.required, this.validator.indonesianPhoneNumber()],
			],
			email: ['', [Validators.required, Validators.email]],
			message: ['', [Validators.required, Validators.minLength(6)]],
		});
	}

	get formCtrlValue(): Contact {
		return {
			fullname: this.form.get('fullname')?.value,
			phone: this.form.get('phone')?.value,
			email: this.form.get('email')?.value,
			message: this.form.get('message')?.value,
		};
	}

	protected getFormControl(form: string): FormControl {
		return this.form.get(form) as FormControl;
	}

  private submit(): void {
    this.feedback.submitFeedback(this.formCtrlValue).subscribe(
      {
        next: (response: HttpResponseEntity<Contact>) => {
          console.log(response.message);
        },
        error: (error) => {
          console.error(error);
        }
      }
    );
  }

  private delay(): void {
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
      this.submit()
      this.delay()
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
