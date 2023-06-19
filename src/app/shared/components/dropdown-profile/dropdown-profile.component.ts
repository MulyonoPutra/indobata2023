import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MenuItem } from 'src/app/configs/menu-items';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-dropdown-profile',
	templateUrl: './dropdown-profile.component.html',
	styleUrls: ['./dropdown-profile.component.scss'],
})
export class DropdownProfileComponent {
	@Input() showDropdown!: boolean;
	@Output() clicked = new EventEmitter<void>();

	protected avatar = pathAssets.emptyAvatar;

	menuItems = [
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
	];

	trackBy(index: number, item: MenuItem): string {
		return item.id;
	}

	onClick(): void {
		this.clicked.emit();
	}
}
