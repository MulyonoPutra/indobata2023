import { Component, Input } from '@angular/core';
import { Marketplace } from '../../models/marketplace';

@Component({
	selector: 'app-available-marketplace',
	templateUrl: './available-marketplace.component.html',
	styleUrls: ['./available-marketplace.component.scss'],
})
export class AvailableMarketplaceComponent {
	@Input() logo!: Marketplace[];

	trackByFn(index: number, item: Marketplace): string {
		// Use a unique identifier for each item
		return item.id;
	}

	navigate(url: string): void {
		window.open(url, '_blank');
	}
}
