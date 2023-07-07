import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

@NgModule({
	declarations: [ProductDetailComponent],
	imports: [CommonModule, ProductDetailRoutingModule, ComponentsModule, LazyLoadImageModule],
})
export class ProductDetailModule {}
