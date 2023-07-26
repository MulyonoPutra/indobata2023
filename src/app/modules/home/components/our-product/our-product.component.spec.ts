import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductComponent } from 'src/app/shared/components/card-product/card-product.component';
import { ShortLineComponent } from 'src/app/shared/components/short-line/short-line.component';
import { OurProductComponent } from './our-product.component';

describe('OurProductComponent', () => {
	let component: OurProductComponent;
	let fixture: ComponentFixture<OurProductComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [OurProductComponent, CardProductComponent, ShortLineComponent],
		}).compileComponents();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
