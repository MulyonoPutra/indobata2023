import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';
import { ShortLineComponent } from 'src/app/shared/components/short-line/short-line.component';

describe('FeaturesComponent', () => {
	let component: FeaturesComponent;
	let fixture: ComponentFixture<FeaturesComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [FeaturesComponent, ShortLineComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(FeaturesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
