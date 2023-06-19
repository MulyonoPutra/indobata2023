import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/core/domain/product';
import { Accordion } from '../../../../core/domain/accordion';
import { ProductService } from '../../../../core/services/product.service';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
	selector: 'app-product-detail',
	templateUrl: './product-detail.component.html',
	styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
	protected product!: Product;
	protected subscriptions: Subscription[] = [];
	protected opened!: boolean;
	protected accordions: Accordion[] = [];
	protected loadingIndicator: boolean = false;

	constructor(
		private productService: ProductService,
		public loadingService: LoadingService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getProductById();
	}

	protected accordionToggle(): void {
		this.opened = true;
	}

	protected getProductById(): void {
		const id = this.route.snapshot.paramMap.get('id') ?? '';
		this.productService.findById(id).subscribe({
			next: (response: HttpResponseEntity<Product>) => {
				this.product = response.data;
				this.accordionData(this.product);
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
		if (data === 0) {
			alert('Product is not available');
		} else {
			alert('Product is available');
		}
	}
}
