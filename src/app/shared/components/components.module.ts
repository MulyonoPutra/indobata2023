import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgxPaginationModule } from 'ngx-pagination';
import { PrimeNgModule } from '../config/primeng.module';
import { CapitalizePipe } from '../pipes/capitalize.pipe';
import { SharedModule } from '../shared.module';
import { AlertComponent } from './alert/alert.component';
import { AuthLinkComponent } from './auth-link/auth-link.component';
import { AuthorComponent } from './author/author.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { ButtonComponent } from './button/button.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { CardProductHoverComponent } from './card-product-hover/card-product-hover.component';
import { CardProductComponent } from './card-product/card-product.component';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardShimmerEffectComponent } from './card-shimmer-effect/card-shimmer-effect.component';
import { ChipsComponent } from './chips/chips.component';
import { ContentDialogComponent } from './content-dialog/content-dialog.component';
import { ContentShimmerEffectComponent } from './content-shimmer-effect/content-shimmer-effect.component';
import { DropdownProfileComponent } from './dropdown-profile/dropdown-profile.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { EmailComponent } from './email/email.component';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';
import { FooterComponent } from './footer/footer.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { HeaderComponent } from './header/header.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputDropdownComponent } from './input-dropdown/input-dropdown.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';
import { MenuComponent } from './menu/menu.component';
import { MoreButtonComponent } from './more-button/more-button.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PhoneComponent } from './phone/phone.component';
import { ShortLineComponent } from './short-line/short-line.component';
import { SingleUploadComponent } from './single-upload/single-upload.component';
import { SocialIconComponent } from './social-icon/social-icon.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
import { TooltipComponent } from './tooltip/tooltip.component';

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
		TooltipComponent,
		DropdownProfileComponent,
		DropdownComponent,
		AuthorComponent,
		FancyButtonComponent,
		InputTextComponent,
		ContentDialogComponent,
		InputDateComponent,
		InputNumberComponent,
		AlertComponent,
		InputTextareaComponent,
		CardShimmerEffectComponent,
		ContentShimmerEffectComponent,
		ChipsComponent,
		EditorComponent,
		SingleUploadComponent,
		InputDropdownComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		LazyLoadImageModule,
		NgxPaginationModule,
		SharedModule,
		PrimeNgModule,
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
		TooltipComponent,
		DropdownProfileComponent,
		DropdownComponent,
		AuthorComponent,
		FancyButtonComponent,
		InputTextComponent,
		ContentDialogComponent,
		InputDateComponent,
		InputNumberComponent,
		AlertComponent,
		InputTextareaComponent,
		CardShimmerEffectComponent,
		ContentShimmerEffectComponent,
		ChipsComponent,
		EditorComponent,
		SingleUploadComponent,
		InputDropdownComponent,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [CapitalizePipe],
})
export class ComponentsModule {}
