import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsComponent } from './testimonials.component';
import { ShortLineComponent } from 'src/app/shared/components/short-line/short-line.component';

describe('TestimonialsComponent', () => {
	let component: TestimonialsComponent;
	let fixture: ComponentFixture<TestimonialsComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [TestimonialsComponent, ShortLineComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(TestimonialsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
