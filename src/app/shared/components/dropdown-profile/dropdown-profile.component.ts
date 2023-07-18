import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem, dropdownProfileItems } from 'src/app/configs/menu-items';

@Component({
	selector: 'app-dropdown-profile',
	templateUrl: './dropdown-profile.component.html',
	styleUrls: ['./dropdown-profile.component.scss'],
})
export class DropdownProfileComponent {
	@Input() showDropdown!: boolean;
	@Input() username!: string;
	@Input() avatar!: string;
	@Output() clicked = new EventEmitter<void>();
	@Output() logout = new EventEmitter<void>();

	menuItems: MenuItem[] = dropdownProfileItems;

	trackBy(index: number, item: MenuItem): string {
		return item.id;
	}

	onClick(): void {
		this.clicked.emit();
	}

	onLogout(): void {
		this.logout.emit();
	}
}
