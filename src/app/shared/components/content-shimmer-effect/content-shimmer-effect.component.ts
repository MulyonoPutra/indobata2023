import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-content-shimmer-effect',
	templateUrl: './content-shimmer-effect.component.html',
	styleUrls: ['./content-shimmer-effect.component.scss'],
})
export class ContentShimmerEffectComponent {
	@Input() isText?: boolean;
}
