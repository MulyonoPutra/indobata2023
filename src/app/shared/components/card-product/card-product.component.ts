import { Component, Input } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Product } from 'src/app/core/domain/product';

@Component({
	selector: 'app-card-product',
	templateUrl: './card-product.component.html',
	styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
	@Input() product!: Product;
	protected iconArrowLeft = pathAssets.iconArrowLeft;
}
