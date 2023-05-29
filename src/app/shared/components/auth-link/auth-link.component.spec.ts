import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLinkComponent } from './auth-link.component';
import { ButtonComponent } from '../button/button.component';

describe('AuthLinkComponent', () => {
  let component: AuthLinkComponent;
  let fixture: ComponentFixture<AuthLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthLinkComponent, ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
