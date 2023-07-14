import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-blog-create',
	templateUrl: './blog-create.component.html',
	styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
	form!: FormGroup;
	contents: string = '';

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.formBuilder.group({
			title: ['', Validators.required],
			content: ['', Validators.required],
		});
	}

	get formCtrlValue() {
		return {
			title: this.form.get('title')?.value,
			content: this.form.get('content')?.value,
		};
	}

	get title() {
		return this.form.get('title');
	}
	get content() {
		return this.form.get('content');
	}

	onSubmit() {
		console.log(this.formCtrlValue);
    console.log(this.form.dirty);
	}
}
