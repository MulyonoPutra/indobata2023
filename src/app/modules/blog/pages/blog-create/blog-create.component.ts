import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-blog-create',
	templateUrl: './blog-create.component.html',
	styleUrls: ['./blog-create.component.scss'],
})
export class BlogCreateComponent implements OnInit {
	blogPostForm!: FormGroup;
	contents: string = '';
	Editor = ClassicEditor;
	public editorConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'bold',
				'italic',
				'underline',
				'strikethrough',
				'link',
				'|',
				'bulletedList',
				'numberedList',
				'todoList',
				'|',
				'alignment',
				'indent',
				'outdent',
				'|',
				'blockQuote',
				'insertTable',
				'mediaEmbed',
				'imageUpload',
				'|',
				'undo',
				'redo',
				'|',
				'removeFormat',
				'highlight',
				'code',
				'subscript',
				'superscript',
				'specialCharacters',
				'|',
				'fontColor',
				'fontBackgroundColor',
				'fontSize',
				'fontFamily',
				'|',
				'horizontalLine',
				'pageBreak',
				'htmlEmbed',
				'|',
				'selectAll',
				'exportPdf',
				'exportWord',
				'exportHtml',
				'|',
				'print',
				'showBlocks',
				'maximize',
			],
			shouldNotGroupWhenFull: true,
		},
		language: 'en',
		image: {
			toolbar: [
				'imageTextAlternative',
				'imageStyle:full',
				'imageStyle:side',
				'linkImage',
			],
		},
		table: {
			contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
		},
		licenseKey: '',
		placeholder: 'Start typing here...',
		simpleUpload: {
			uploadUrl: 'your-upload-url',
			// Additional options for the upload feature
			// For example, you can set headers or additional parameters
			// Refer to the CKEditor documentation for more information
			// uploadHeaders: {
			//   'X-CSRF-TOKEN': 'your-csrf-token'
			// }
		},
		// More configuration options...
	};

	constructor(private formBuilder: FormBuilder) {}

	ngOnInit(): void {
		this.blogPostForm = this.formBuilder.group({
			title: ['', Validators.required],
			content: ['', Validators.required],
		});
	}

	get title() {
		return this.blogPostForm.get('title');
	}
	get content() {
		return this.blogPostForm.get('content');
	}

	onSubmit() {
		if (this.blogPostForm.valid) {
			// Process the blog post data here
			console.log('Blog post created');
		} else {
			console.log('Invalid form');
		}
	}
}
