import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';
import { ProductsType } from 'src/app/modules/product/models/product';

@Component({
	selector: 'app-our-product',
	templateUrl: './our-product.component.html',
	styleUrls: ['./our-product.component.scss'],
})
export class OurProductComponent {
	@Input() products!: ProductsType;
}
