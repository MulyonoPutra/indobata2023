import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-confirm-dialog',
	templateUrl: './confirm-dialog.component.html',
	styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
	@Input() size? = 'md';
	@Input() title? = 'Modal title';

	@Output() closeEvent = new EventEmitter();
	@Output() submitEvent = new EventEmitter();

	constructor(private elementRef: ElementRef) {}

	close(): void {
		this.elementRef.nativeElement.remove();
		this.closeEvent.emit();
	}

	submit(): void {
		this.elementRef.nativeElement.remove();
		this.submitEvent.emit();
	}
}
