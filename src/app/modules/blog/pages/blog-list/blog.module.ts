import { BlogComponent } from './blog.component';
import { BlogRoutingModule } from './blog-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [BlogComponent],
	imports: [CommonModule, BlogRoutingModule, ComponentsModule, NgxPaginationModule],
})
export class BlogModule {}
