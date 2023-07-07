import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OurProductComponent } from './our-product.component';
import { Product } from '../../models/product';
import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';
import { ShortLineComponent } from 'src/app/shared/components/short-line/short-line.component';

describe('OurProductComponent', () => {
	let component: OurProductComponent;
	let fixture: ComponentFixture<OurProductComponent>;
	const products: Product[] = [
		// Mock product data
		{
			id: '1',
			name: 'Genteng Beton',
			images: '../../../../../assets/images/genteng1.jpg',
			description: 'lorem ipsum dolor sit amet, consectetur adipis',
		},
		{
			id: '2',
			name: 'Genteng Beton',
			images: '../../../../../assets/images/genteng1.jpg',
			description: 'lorem ipsum dolor sit amet, consectetur adipis',
		},
		// Add more mock products if needed
	];

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OurProductComponent, CardProductComponent, ShortLineComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(OurProductComponent);
		component = fixture.componentInstance;
		component.products = products; // Assign the mock products to the component's input
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	// Add more unit tests as needed

	it('should render the product cards', () => {
		const productCards = fixture.nativeElement.querySelectorAll('app-card-product');
		expect(productCards.length).toBe(products.length);
	});
});
