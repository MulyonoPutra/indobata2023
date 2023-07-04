import { Component, EventEmitter, Input, Output } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
	@Input() options!: any[];
	@Input() label!: string;
  @Output() optionId = new EventEmitter<string>();

	protected isOpen: boolean = false;
	protected selectedOption!: any;
	protected selectedOptionIndex!: number;

	readonly icon = {
		dropdown: pathAssets.iconDropdown,
		checklist: pathAssets.iconChecklist,
	};

	protected toggleDropdown() {
		this.isOpen = !this.isOpen;
	}

	protected selectOption(option: any, index: number) {
		this.selectedOption = option.name;

		this.selectedOptionIndex = index;
		this.isOpen = false;

    this.sendOptionId(option.id);
	}

  sendOptionId(id: string): void {
		this.optionId.emit(id);
	}
}

export interface Region {
  id: string;
  name: string;
}
