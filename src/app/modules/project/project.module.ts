import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MaterialModule } from 'src/app/shared/config/material.module';
import { ProjectDetailDialogComponent } from './components/project-detail-dialog/project-detail-dialog.component';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectComponent } from './project.component';

@NgModule({
	declarations: [ProjectComponent, ProjectDetailDialogComponent],
	imports: [CommonModule, ProjectRoutingModule, ComponentsModule, NgxPaginationModule, MaterialModule],
})
export class ProjectModule {}
