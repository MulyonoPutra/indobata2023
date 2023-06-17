import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCategoriesType } from 'src/app/core/domain/product';

@Component({
	selector: 'app-sidebar-filter',
	templateUrl: './sidebar-filter.component.html',
	styleUrls: ['./sidebar-filter.component.scss'],
})
export class SidebarFilterComponent {
	@Input() isFilterShown!: boolean;
	@Input() icon!: string;
	@Input() categories!: ProductCategoriesType;
	@Output() clicked = new EventEmitter<void>();
	@Output() categoryId = new EventEmitter<string>();

	onClick(): void {
		this.clicked.emit();
	}

	filterBy(id: string): void {
		this.categoryId.emit(id);
	}
}
