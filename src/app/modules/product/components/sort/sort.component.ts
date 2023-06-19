import { Component, EventEmitter, Input, Output } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-sort',
	templateUrl: './sort.component.html',
	styleUrls: ['./sort.component.scss'],
})
export class SortComponent {
	@Input() showDropdown!: boolean;
	@Output() clicked = new EventEmitter<void>();

	iconArrowDown = pathAssets.iconArrowDown;

	menuItems = ['Newest', 'Price: Low to High', 'Price: High to Low'];

	onClick(): void {
		this.clicked.emit();
	}
}
