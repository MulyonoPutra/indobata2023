import { Component, OnInit } from '@angular/core';
import {
	Event,
	NavigationCancel,
	NavigationEnd,
	NavigationError,
	NavigationStart,
	Router,
} from '@angular/router';
import { take, timer } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'indobata';
	loadingIndicator!: boolean;

	constructor(private router: Router) {
		this.showSpinner();
	}

	ngOnInit() {
		this.scrollToTop();
	}

	showSpinner(): void {
		this.router.events.subscribe((routeEvent: Event) => {
			if (routeEvent instanceof NavigationStart) {
				this.loadingIndicator = true;
			}

			if (routeEvent instanceof NavigationEnd) {
				this.delay();
			}

			if (
				routeEvent instanceof NavigationEnd ||
				routeEvent instanceof NavigationError ||
				routeEvent instanceof NavigationCancel
			) {
				this.delay();
			}
		});
	}

	delay(): void {
		timer(1000)
			.pipe(take(1))
			.subscribe(() => {
				this.loadingIndicator = false;
			});
	}

	scrollToTop() {
		this.router.events.subscribe((event) => {
			if (!(event instanceof NavigationEnd)) {
				return;
			}
			window.scrollTo(0, 0);
		});
	}
}
