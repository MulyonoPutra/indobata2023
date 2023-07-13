import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';
import { ProjectDetailContentComponent } from './components/project-detail-content/project-detail-content.component';

@NgModule({
	declarations: [ProjectComponent, ProjectDetailContentComponent],
	imports: [CommonModule, ProjectRoutingModule, ComponentsModule, NgxPaginationModule],
})
export class ProjectModule {}
