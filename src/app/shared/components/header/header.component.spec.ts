import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialIconsComponent } from 'src/app/modules/components/social-icons/social-icons.component';
import { AuthLinkComponent } from '../auth-link/auth-link.component';
import { EmailComponent } from '../email/email.component';
import { MenuComponent } from '../menu/menu.component';
import { PhoneComponent } from '../phone/phone.component';
import { HeaderComponent } from './header.component';

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
				SocialIconsComponent,
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
