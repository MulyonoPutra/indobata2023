import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableMarketplaceComponent } from './available-marketplace.component';
import { ShortLineComponent } from 'src/app/shared/components/short-line/short-line.component';

describe('AvailableMarketplaceComponent', () => {
  let component: AvailableMarketplaceComponent;
  let fixture: ComponentFixture<AvailableMarketplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableMarketplaceComponent, ShortLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableMarketplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
