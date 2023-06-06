import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

@NgModule({
	declarations: [BlogComponent],
	imports: [CommonModule, BlogRoutingModule, ComponentsModule],
})
export class BlogModule {}
