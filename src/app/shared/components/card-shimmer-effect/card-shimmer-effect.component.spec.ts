import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardShimmerEffectComponent } from './card-shimmer-effect.component';

describe('CardShimmerEffectComponent', () => {
	let component: CardShimmerEffectComponent;
	let fixture: ComponentFixture<CardShimmerEffectComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [CardShimmerEffectComponent],
		});
		fixture = TestBed.createComponent(CardShimmerEffectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
