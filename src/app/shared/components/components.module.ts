import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SocialIconsComponent } from '../../modules/components/social-icons/social-icons.component';
import { AuthLinkComponent } from './auth-link/auth-link.component';
import { ButtonComponent } from './button/button.component';
import { CardProductComponent } from './card-product/card-product.component';
import { EmailComponent } from './email/email.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PhoneComponent } from './phone/phone.component';
import { ShortLineComponent } from './short-line/short-line.component';
import { SocialIconComponent } from './social-icon/social-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    PhoneComponent,
    EmailComponent,
    MenuComponent,
    AuthLinkComponent,
    ButtonComponent,
    CardProductComponent,
    ShortLineComponent,
    SocialIconComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    SocialIconsComponent,
    PhoneComponent,
    EmailComponent,
    MenuComponent,
    AuthLinkComponent,
    ButtonComponent,
    CardProductComponent,
    ShortLineComponent,
    SocialIconComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
