import { Component, Input } from '@angular/core';

import { pathAssets } from 'src/app/configs/path-assets';
import { Article } from 'src/app/core/domain/article';

@Component({
	selector: 'app-card-blog',
	templateUrl: './card-blog.component.html',
	styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent {
	@Input() article!: Article;
	iconTime = pathAssets.iconTime;
	showTooltipFlag: boolean = false;

	showTooltip() {
		this.showTooltipFlag = true;
	}

	hideTooltip() {
		this.showTooltipFlag = false;
	}
}
