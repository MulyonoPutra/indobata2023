import { Component, EventEmitter, Input, Output } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Region } from 'src/app/core/domain/address';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
	@Input() options!: any[];
	@Input() label!: string;
	@Output() optionId = new EventEmitter<Region>();

	protected isOpen: boolean = false;
	protected selectedOption!: string;
	protected selectedOptionIndex!: number;

	readonly icon = {
		dropdown: pathAssets.iconDropdown,
		checklist: pathAssets.iconChecklist,
	};

	protected toggleDropdown() {
		this.isOpen = !this.isOpen;
	}

	protected selectOption(option: Region, index: number) {
		this.selectedOption = option.name;

		this.selectedOptionIndex = index;
		this.isOpen = false;

		this.sendOptionId(option);
	}

	sendOptionId(id: Region): void {
		this.optionId.emit(id);
	}
}
