import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { Project } from 'src/app/core/domain/project';

@Component({
	selector: 'app-project-detail-dialog',
	templateUrl: './project-detail-dialog.component.html',
	styleUrls: ['./project-detail-dialog.component.scss'],
})
export class ProjectDetailDialogComponent {
	project: Project;
	constructor(public dialogRef: DialogRef, @Inject(DIALOG_DATA) public data: Project) {
		this.project = data;
	}
}
