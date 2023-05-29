import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ShortLineComponent } from './short-line.component';

describe('ShortLineComponent', () => {
  let component: ShortLineComponent;
  let fixture: ComponentFixture<ShortLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShortLineComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ShortLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
