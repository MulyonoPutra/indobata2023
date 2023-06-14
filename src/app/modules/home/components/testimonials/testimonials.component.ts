import { Component, Input } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Testimonials } from 'src/app/core/domain/testimonials';

@Component({
	selector: 'app-testimonials',
	templateUrl: './testimonials.component.html',
	styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
	@Input() testimonials!: Testimonials[];

	protected isExpanded = false;
	protected expandedIndex: number | undefined;
	protected quotesIcon = pathAssets.iconQuotes;
	protected avatar =
		'https://t3.ftcdn.net/jpg/02/43/51/48/360_F_243514868_XDIMJHNNJYKLRST05XnnTj0MBpC4hdT5.jpg';

	toggleExpansion(index: number): void {
		if (this.expandedIndex === index) {
			this.expandedIndex = undefined;
		} else {
			this.expandedIndex = index;
		}
	}
}
