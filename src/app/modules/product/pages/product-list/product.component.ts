import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { pathAssets } from 'src/app/configs/path-assets';
import { ProductResponseEntity, ProductService } from '../../../../core/services/product.service';
import { ProductsArrayType } from 'src/app/core/domain/product';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy {
	protected iconArrowLeft = pathAssets.iconArrowLeft;
	protected products!: ProductsArrayType;
	protected subscriptions: Subscription[] = [];
	protected showDropdown: boolean = false;

	constructor(private productService: ProductService) {}

	ngOnInit(): void {
		this.getProducts();
	}

	getProducts(): void {
		this.subscriptions.push(
			this.productService.loadAll().subscribe({
				next: (response: ProductResponseEntity) => {
					this.products = response.data
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	toggleDropdown() {
		this.showDropdown = !this.showDropdown;
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((subs) => {
			subs.unsubscribe();
		});
	}
}
