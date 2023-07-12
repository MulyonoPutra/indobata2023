import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FancyButtonComponent } from './fancy-button.component';

describe('FancyButtonComponent', () => {
  let component: FancyButtonComponent;
  let fixture: ComponentFixture<FancyButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FancyButtonComponent]
    });
    fixture = TestBed.createComponent(FancyButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
