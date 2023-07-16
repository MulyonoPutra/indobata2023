import { Component, Input } from '@angular/core';

import { LoadingService } from 'src/app/core/services/loading.service';
import { Observable } from 'rxjs';
import { OverviewSection } from 'src/app/core/domain/overview';
import { Router } from '@angular/router';

@Component({
	selector: 'app-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent {
	@Input() overview!: OverviewSection;
	protected loading$!: Observable<boolean>;

	constructor(public router: Router, public loadingService: LoadingService) {}

	onNavigate() {
		this.router.navigateByUrl(`/about`);
	}
}
