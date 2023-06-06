import { Component, Input } from '@angular/core';
import { Content, Features } from '../../models/features';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
	@Input() features!: Features;

	trackByFn(index: number, item: Content): number {
		// Use a unique identifier for each item
		return item.id;
	}
}
