import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { About } from '../../core/domain/about';
import { AboutService } from '../../core/services/about.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
	private destroy$ = new Subject<void>();
	protected about!: About;

	constructor(private aboutService: AboutService) {}

	ngOnInit(): void {
		this.getAboutSections();
	}

	getAboutSections(): void {
		this.aboutService
			.getAboutSection()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: About) => (this.about = response),
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
