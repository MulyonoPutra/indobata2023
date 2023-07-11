import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
	declarations: [BlogDetailComponent],
	imports: [CommonModule, BlogDetailRoutingModule, ComponentsModule],
})
export class BlogDetailModule {}
