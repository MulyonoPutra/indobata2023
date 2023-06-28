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
	@Output() choose = new EventEmitter<string>();

	iconArrowDown = pathAssets.iconArrowDown;

	menuItems = [
		{ name: 'Refresh', id: '1' },
		{ name: 'Newest', id: '2' },
		{ name: 'Price: Low to High', id: '3' },
		{ name: 'Price: High to Low', id: '4' },
	];

	onClick(): void {
		this.clicked.emit();
	}

	chooseMenu(id?: string): void {
		this.choose.emit(id);
	}
}
