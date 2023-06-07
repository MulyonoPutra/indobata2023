import { Component, Input } from '@angular/core';
import { ProductsType } from 'src/app/core/domain/product';

@Component({
	selector: 'app-our-product',
	templateUrl: './our-product.component.html',
	styleUrls: ['./our-product.component.scss'],
})
export class OurProductComponent {
	@Input() products!: ProductsType;
}
