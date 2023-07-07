import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { OverviewSection } from 'src/app/core/domain/overview';

@Component({
	selector: 'app-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
	@Input() overview!: OverviewSection;

	constructor(public router: Router) {}

	onNavigate() {
		this.router.navigateByUrl(`/about`);
	}
}
