import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArticlesComponent } from './my-articles.component';

describe('MyArticlesComponent', () => {
	let component: MyArticlesComponent;
	let fixture: ComponentFixture<MyArticlesComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [MyArticlesComponent],
		});
		fixture = TestBed.createComponent(MyArticlesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
