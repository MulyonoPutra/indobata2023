import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { BlogCreateComponent } from './blog-create.component';

@NgModule({
	declarations: [BlogCreateComponent],
	imports: [
		CommonModule,
		BlogCreateRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		CKEditorModule,
	],
})
export class BlogCreateModule {}
