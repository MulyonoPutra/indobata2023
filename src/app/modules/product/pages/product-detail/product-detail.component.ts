import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Accordion } from '../../models/accordion';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
	protected product: Product | undefined;
	protected subscriptions: Subscription[] = [];
	protected opened!: boolean;
	protected accordions: Accordion[] = [];

	constructor(
		private productService: ProductService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getProductById();
	}

	protected accordionToggle(): void {
		this.opened = true;
	}

	protected getProductById() {
		const id = this.route.snapshot.paramMap.get('id')!;
		this.productService.getProductById(id).subscribe({
			next: (product: Product) => {
				this.product = product;
				this.accordionData(product);
			},
		});
	}

	protected accordionData(product: Product): void {
		this.accordions = [
			{
				title: 'Description',
				content: product.description,
				open: false,
			},
			{
				title: 'Ingredients',
				content: product.ingredients.join(', '),
				open: false,
			},
			{
				title: 'Features',
				content: product.features,
				open: false,
			},
			{
				title: 'Applications',
				content: product.applications.join(', '),
				open: false,
			},
			// {
			//   title: 'Technical Specifications',
			//   content: JSON.stringify(this.product.technicalSpecifications),
			//   open: false,
			// },
		];
	}

	protected toggleItem(index: number): void {
		this.accordions[index].open = !this.accordions[index].open;
	}

	protected isString(data: string | string[]): boolean {
		return typeof data === 'string';
	}

	protected isArray(data: any): data is object {
		return Array.isArray(data);
	}

	protected isAvailable(data: number): void {
		if (data >= 0) {
			alert('Product is not available');
		}
	}
}
