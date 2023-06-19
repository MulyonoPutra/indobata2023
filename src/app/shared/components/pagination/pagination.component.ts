import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page!: number;
  @Input() totalItems!: number;

	@Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

	onPageChanged(pageNumber: any): void {
		this.pageChange.emit(pageNumber);
	}

}
