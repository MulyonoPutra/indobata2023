import { Component, Input } from '@angular/core';
import { OverviewSection } from 'src/app/core/domain/overview';

@Component({
	selector: 'app-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
	@Input() overview!: OverviewSection;
}
