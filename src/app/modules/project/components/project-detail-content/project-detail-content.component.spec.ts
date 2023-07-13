import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailContentComponent } from './project-detail-content.component';

describe('ProjectDetailContentComponent', () => {
	let component: ProjectDetailContentComponent;
	let fixture: ComponentFixture<ProjectDetailContentComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ProjectDetailContentComponent],
		});
		fixture = TestBed.createComponent(ProjectDetailContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
