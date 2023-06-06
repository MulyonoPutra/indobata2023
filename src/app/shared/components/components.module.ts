import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AuthLinkComponent } from './auth-link/auth-link.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { ButtonComponent } from './button/button.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { CardProductHoverComponent } from './card-product-hover/card-product-hover.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { EmailComponent } from './email/email.component';
import { FooterComponent } from './footer/footer.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PhoneComponent } from './phone/phone.component';
import { ShortLineComponent } from './short-line/short-line.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';

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
		SubmitButtonComponent,
		FormFieldComponent,
		CardProjectComponent,
		CardBlogComponent,
		PaginationComponent,
		BrandLogoComponent,
		SpinnerComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		LazyLoadImageModule,
	],
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
		SubmitButtonComponent,
		FormFieldComponent,
		CardProjectComponent,
		CardBlogComponent,
		PaginationComponent,
		BrandLogoComponent,
		SpinnerComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
