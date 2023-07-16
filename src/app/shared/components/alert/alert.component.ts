import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-alert',
	templateUrl: './alert.component.html',
	styleUrls: ['./alert.component.scss'],
	providers: [MessageService],
})
export class AlertComponent {
	constructor(private messageService: MessageService) {}

	addSingle() {
		this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
	}

	addMultiple() {
		this.messageService.addAll([
			{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
			{ severity: 'info', summary: 'Info Message', detail: 'Via MessageService' },
		]);
	}

	clear() {
		this.messageService.clear();
	}
}
