import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BlogCreateComponent } from './blog-create.component';
import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [BlogCreateComponent],
	imports: [CommonModule, BlogCreateRoutingModule, FormsModule, ReactiveFormsModule],
})
export class BlogCreateModule {}
