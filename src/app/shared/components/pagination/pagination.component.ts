import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Input() limit!: number;
  @Input() totalItems!: number;

  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  onPageChange(pageNumber: any): void {
    this.pageChange.emit(pageNumber);
  }
}
