import { Component } from '@angular/core';

@Component({
	selector: 'app-card-blog',
	templateUrl: './card-blog.component.html',
	styleUrls: ['./card-blog.component.scss'],
})
export class CardBlogComponent {
	showTooltipFlag = false;
	word =
		'loremipsum dolor sit amet, consectetur adipis text, sed do eius maxim venenatis vel aug tellus et dolore magna aliqu';

	showTooltip() {
		this.showTooltipFlag = true;
	}

	hideTooltip() {
		this.showTooltipFlag = false;
	}
}
