import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-content-dialog',
	templateUrl: './content-dialog.component.html',
	styleUrls: ['./content-dialog.component.scss'],
})
export class ContentDialogComponent {
	@Input() visible!: boolean;
	@Input() closable: boolean = true;
}
