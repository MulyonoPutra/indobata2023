import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLinkComponent } from '../auth-link/auth-link.component';
import { EmailComponent } from '../email/email.component';
import { HeaderComponent } from './header.component';
import { MenuComponent } from '../menu/menu.component';
import { PhoneComponent } from '../phone/phone.component';
import { SocialIconComponent } from '../social-icon/social-icon.component';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				HeaderComponent,
				PhoneComponent,
				EmailComponent,
				AuthLinkComponent,
				MenuComponent,
				SocialIconComponent,
			],
		}).compileComponents();

		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
