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

	toggleExpansion(index: number): void {
		if (this.expandedIndex === index) {
			this.expandedIndex = undefined;
		} else {
			this.expandedIndex = index;
		}
	}
}
