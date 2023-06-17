import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'app-view-grid-button',
	templateUrl: './view-grid-button.component.html',
	styleUrls: ['./view-grid-button.component.scss'],
})
export class ViewGridButtonComponent {
  @Output() clicked = new EventEmitter<void>();

	onClick(): void {
		this.clicked.emit();
	}
}
