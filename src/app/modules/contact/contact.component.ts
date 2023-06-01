import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

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

  protected save(): void {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      this.form.reset();
      console.log(this.formCtrlValue);
    }, 2000);
  }

}
