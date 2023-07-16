import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { OverviewResponseEntity, OverviewService } from 'src/app/core/services/overview.service';

import { Overview } from 'src/app/core/domain/overview';
import { LoadingService } from 'src/app/core/services/loading.service';
import { StaticText } from 'src/app/shared/constants/static-text';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
	private destroy$ = new Subject<void>();
	protected overview!: Overview;
	protected loading$!: Observable<boolean>;

	protected title = StaticText.header;

	constructor(private overviewService: OverviewService, public loadingService: LoadingService) {}

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
