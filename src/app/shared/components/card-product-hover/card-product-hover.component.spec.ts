import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProductHoverComponent } from './card-product-hover.component';

describe('CardProductHoverComponent', () => {
  let component: CardProductHoverComponent;
  let fixture: ComponentFixture<CardProductHoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProductHoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProductHoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
