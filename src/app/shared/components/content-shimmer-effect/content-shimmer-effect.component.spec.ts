import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentShimmerEffectComponent } from './content-shimmer-effect.component';

describe('ContentShimmerEffectComponent', () => {
	let component: ContentShimmerEffectComponent;
	let fixture: ComponentFixture<ContentShimmerEffectComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ContentShimmerEffectComponent],
		});
		fixture = TestBed.createComponent(ContentShimmerEffectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
