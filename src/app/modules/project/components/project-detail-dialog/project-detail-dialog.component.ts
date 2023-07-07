import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';

@Component({
	selector: 'app-project-detail-dialog',
	templateUrl: './project-detail-dialog.component.html',
	styleUrls: ['./project-detail-dialog.component.scss'],
})
export class ProjectDetailDialogComponent {
	constructor(public dialogRef: DialogRef) {}
}
