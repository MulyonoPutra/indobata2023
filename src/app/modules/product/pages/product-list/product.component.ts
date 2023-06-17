import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { pathAssets } from 'src/app/configs/path-assets';
import {
	Category,
	ProductCategoriesType,
	ProductsArrayType,
} from 'src/app/core/domain/product';
import {
	ProductCategoriesResponseEntity,
	ProductResponseEntity,
	ProductService,
} from '../../../../core/services/product.service';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
	protected iconArrowLeft = pathAssets.iconArrowLeft;
	protected products!: ProductsArrayType;
	protected categories!: ProductCategoriesType;
	protected subscriptions: Subscription[] = [];
	protected showDropdown: boolean = false;
	protected isFilterShown: boolean = false;
	protected iconFilter: string = pathAssets.iconFilter;
	protected iconClose: string = pathAssets.iconClosed;

	protected page: number = 0;
	protected totalPages!: number;
	protected totalItems!: number;
	protected limit: number = 6;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.fetch();
	}

	private fetch(): void {
		this.getProducts();
		this.getProductCategories();
	}

	protected getProducts(): void {
		this.subscriptions.push(
			this.productService.loadAll(this.page, this.limit).subscribe({
				next: (response: ProductResponseEntity) => {
					this.products = response.data;
					this.totalPages = response.totalPages!;
					this.totalItems = response.totalItems!;
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	protected onPageChanged(page: number): void {
		this.page = page;
		this.getProducts();
	}

	protected getProductCategories(): void {
		this.subscriptions.push(
			this.productService.findProductCategories().subscribe({
				next: (response: ProductCategoriesResponseEntity) => {
					this.categories = response.data;
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	protected trackById(index: number, name: Category): string {
		return name._id;
	}

	protected filterBy(id: string) {
		this.getProductsByCategoryId(id);
	}

	protected onReceive(id: string) {
		this.getProductsByCategoryId(id);
	}

	protected getProductsByCategoryId(id: string): void {
		this.subscriptions.push(
			this.productService.findProductsByCategoryId(id).subscribe({
				next: (response: ProductResponseEntity) => {
					this.products = response.data;
				},
				error: (error: HttpErrorResponse) => {
					alert(error.message);
				},
			})
		);
	}

	protected showFilters() {
		this.isFilterShown = !this.isFilterShown;
	}

	protected toggleDropdown() {
		this.showDropdown = !this.showDropdown;
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((subs: Subscription) => {
			subs.unsubscribe();
		});
	}
}
