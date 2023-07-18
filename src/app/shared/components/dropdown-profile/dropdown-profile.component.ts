import { Component, EventEmitter, Input, Output } from '@angular/core';

import { MenuItem } from 'src/app/configs/menu-items';

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

	menuItems: MenuItem[] = [
		{
			id: '1',
			title: 'Profile',
			route: 'profile',
		},
		{
			id: '2',
			title: 'Create Article',
			route: 'blog-create',
		},
    {
			id: '3',
			title: 'My Article',
			route: 'blog-create',
		},
	];

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
