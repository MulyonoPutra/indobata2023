import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Overview } from 'src/app/core/domain/overview';
import { OverviewResponseEntity, OverviewService } from 'src/app/core/services/overview.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
	private destroy$ = new Subject<void>();
	protected overview!: Overview;

	protected title: string =
		'Welcome to Indobata, a leading provider of high-quality concrete products. With decades of experience in the industry, we take pride in delivering exceptional solutions for all your construction needs.';

	constructor(private overviewService: OverviewService) {}

	ngOnInit(): void {
		this.getOverview();
	}

	getOverview(): void {
		this.overviewService
			.loadAll()
			.pipe(takeUntil(this.destroy$))
			.subscribe({
				next: (response: OverviewResponseEntity) => {
					this.overview = response.data;
				},
			});
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
