import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AvailableMarketplaceComponent } from './components/available-marketplace/available-marketplace.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeroComponent } from './components/hero/hero.component';
import { OurProductComponent } from './components/our-product/our-product.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomeComponent } from './home.component';
import { ContactComponent } from '../contact/contact.component';

describe('HomeComponent', () => {
	let component: HomeComponent;
	let fixture: ComponentFixture<HomeComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				HomeComponent,
				HeroComponent,
				AboutSectionComponent,
				FeaturesComponent,
				OurProductComponent,
				AvailableMarketplaceComponent,
				TestimonialsComponent,
				ContactComponent,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HomeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
