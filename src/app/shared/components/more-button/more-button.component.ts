import { Component, EventEmitter, Input, Output } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-more-button',
	templateUrl: './more-button.component.html',
	styleUrls: ['./more-button.component.scss'],
})
export class MoreButtonComponent {
	icon = pathAssets.iconArrowRight;

	@Input() label!: string;
	@Input() isOpenDialog!: boolean;
	@Input() url?: string;
	@Output() navigate: EventEmitter<number> = new EventEmitter<number>();
	@Output() callParentEvent = new EventEmitter<void>();

	openDialog() {
		this.callParentEvent.emit();
	}

	onNavigate(): void {
		this.navigate.emit();
	}
}
