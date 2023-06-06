import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogCreateRoutingModule } from './blog-create-routing.module';
import { BlogCreateComponent } from './blog-create.component';

@NgModule({
	declarations: [BlogCreateComponent],
	imports: [CommonModule, BlogCreateRoutingModule],
})
export class BlogCreateModule {}
