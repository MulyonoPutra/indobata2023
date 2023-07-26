import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
	providedIn: 'root',
})
export class AlertService {
	constructor(private messageService: MessageService) {}

	success(summary: string, detail: string): void {
		this.messageService.add({ severity: 'success', summary, detail });
	}

	errors(summary: string, detail: string): void {
		this.messageService.add({ severity: 'error', summary, detail });
	}

	warning(summary: string, detail: string): void {
		this.messageService.add({ severity: 'warn', summary, detail });
	}

	info(summary: string, detail: string): void {
		this.messageService.add({ severity: 'info', summary, detail });
	}
}
