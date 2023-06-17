import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
	declarations: [ProjectComponent],
	imports: [
		CommonModule,
		ProjectRoutingModule,
		ComponentsModule,
		NgxPaginationModule,
	],
})
export class ProjectModule {}
