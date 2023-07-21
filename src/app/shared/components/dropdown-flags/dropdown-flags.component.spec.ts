import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownFlagsComponent } from './dropdown-flags.component';

describe('DropdownFlagsComponent', () => {
	let component: DropdownFlagsComponent;
	let fixture: ComponentFixture<DropdownFlagsComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [DropdownFlagsComponent],
		});
		fixture = TestBed.createComponent(DropdownFlagsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
