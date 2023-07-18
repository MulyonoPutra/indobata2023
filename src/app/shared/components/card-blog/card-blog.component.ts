import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Router } from '@angular/router';
import { pathAssets } from 'src/app/configs/path-assets';
import { Article } from 'src/app/core/domain/article';

@Component({
	selector: 'app-card-blog',
	templateUrl: './card-blog.component.html',
	styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent {
	@Input() article!: Article;
	@Input() editable!: boolean;
	@Output() remove = new EventEmitter<Event>();
	@Output() edit = new EventEmitter<Event>();
	@Output() navigate = new EventEmitter<string>();

	readonly removeIcon = pathAssets.iconTrash;
	readonly editIcon = pathAssets.iconEdit;
	readonly leftIcon = pathAssets.iconArrowLeft;
	readonly iconTime = pathAssets.iconTime;

	showTooltipFlag: boolean = false;

	constructor(public router: Router) {}

	showTooltip() {
		this.showTooltipFlag = true;
	}

	hideTooltip() {
		this.showTooltipFlag = false;
	}

	onRemove(): void {
		this.remove.emit();
	}

	onEdit(): void {
		this.edit.emit();
	}

	onNavigate(): void {
		this.navigate.emit();
	}
}
