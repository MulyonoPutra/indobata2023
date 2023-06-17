import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-sort',
	templateUrl: './sort.component.html',
	styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
  @Input() showDropdown!: boolean;
	@Output() clicked = new EventEmitter<void>();

	onClick(): void {
		this.clicked.emit();
	}
}
