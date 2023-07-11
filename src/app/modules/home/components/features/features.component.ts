import { Component, Input } from '@angular/core';
import { Features, FeaturesArrayType } from '../../../../core/domain/features';

import { StaticText } from 'src/app/shared/constants/static-text';

@Component({
	selector: 'app-features',
	templateUrl: './features.component.html',
	styleUrls: ['./features.component.scss'],
})
export class FeaturesComponent {
	@Input() features!: FeaturesArrayType;

	wording = StaticText.services;

	trackByFn(index: number, item: Features): number {
		// Use a unique identifier for each item
		return item.id;
	}
}
