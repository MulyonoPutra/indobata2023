import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { BlogCreateComponent } from './blog-create.component';

@NgModule({
	declarations: [BlogCreateComponent],
	imports: [CommonModule, BlogCreateRoutingModule, FormsModule, ReactiveFormsModule, ComponentsModule, DialogModule],
})
export class BlogCreateModule {}
