import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent implements OnInit {
  protected form!: FormGroup;
  isSubmitting = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForms();
  }

  protected initForms(): void {
    this.form = this.fb.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  get formCtrlValue() {
    return {
      fullname: this.form.get('fullname')?.value,
      phone: this.form.get('phone')?.value,
      email: this.form.get('email')?.value,
      message: this.form.get('message')?.value,
    };
  }

  getFormControl(fullname: string): FormControl {
    return this.form.get(fullname) as FormControl;
  }

  protected save(): void {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting = true;

    setTimeout(() => {
      this.isSubmitting = false;
      console.log(this.formCtrlValue.email);
      this.form.reset();
    }, 2000);
  }
}
