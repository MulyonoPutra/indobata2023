import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { AvailableMarketplaceComponent } from './components/available-marketplace/available-marketplace.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { HeroComponent } from './components/hero/hero.component';
import { OurProductComponent } from './components/our-product/our-product.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    AboutSectionComponent,
    FeaturesComponent,
    OurProductComponent,
    AvailableMarketplaceComponent,
    TestimonialsComponent,
    ContactSectionComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    LazyLoadImageModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeroComponent,
    AboutSectionComponent,
    HomeComponent,
    FeaturesComponent,
    OurProductComponent,
    AvailableMarketplaceComponent,
    TestimonialsComponent,
    ContactSectionComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {}
