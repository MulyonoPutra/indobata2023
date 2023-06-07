import { Component, Input } from '@angular/core';
import {  Features, FeaturesArrayType } from '../../models/features';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
	@Input() features!: FeaturesArrayType;

	trackByFn(index: number, item: Features): number {
		// Use a unique identifier for each item
		return item.id;
	}
}
