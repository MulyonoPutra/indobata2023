import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarFilterComponent } from '../../components/sidebar-filter/sidebar-filter.component';
import { SortComponent } from '../../components/sort/sort.component';
import { ViewGridButtonComponent } from '../../components/view-grid-button/view-grid-button.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';

@NgModule({
	declarations: [
		ProductComponent,
		ViewGridButtonComponent,
		SortComponent,
		SidebarFilterComponent,
	],
	imports: [
		SharedModule,
		CommonModule,
		ProductRoutingModule,
		ComponentsModule,
		NgxPaginationModule,
	],
})
export class ProductModule {}
