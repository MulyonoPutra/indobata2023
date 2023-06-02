import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthLinkComponent } from './auth-link/auth-link.component';
import { ButtonComponent } from './button/button.component';
import { CardProductHoverComponent } from './card-product-hover/card-product-hover.component';
import { CardProductComponent } from './card-product/card-product.component';
import { EmailComponent } from './email/email.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { PhoneComponent } from './phone/phone.component';
import { ShortLineComponent } from './short-line/short-line.component';
import { SocialIconComponent } from './social-icon/social-icon.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PhoneComponent,
    EmailComponent,
    MenuComponent,
    AuthLinkComponent,
    ButtonComponent,
    CardProductComponent,
    ShortLineComponent,
    SocialIconComponent,
    CardProductHoverComponent,
    MoreButtonComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    PhoneComponent,
    EmailComponent,
    MenuComponent,
    AuthLinkComponent,
    ButtonComponent,
    CardProductComponent,
    ShortLineComponent,
    SocialIconComponent,
    MoreButtonComponent,
    CardProductHoverComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
