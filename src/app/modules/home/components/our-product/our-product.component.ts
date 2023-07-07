import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsArrayType } from 'src/app/core/domain/product';

@Component({
	selector: 'app-our-product',
	templateUrl: './our-product.component.html',
	styleUrls: ['./our-product.component.scss'],
})
export class OurProductComponent {
	@Input() products!: ProductsArrayType;

	constructor(public router: Router) {}

	onNavigate() {
		this.router.navigateByUrl(`/product`);
	}
}
