import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { MyArticlesComponent } from './my-articles.component';
import { MyArticlesRoutingModule } from './my-articles-routing.module';
import { PrimeNgModule } from 'src/app/shared/config/primeng.module';

@NgModule({
	declarations: [MyArticlesComponent],
	imports: [CommonModule, MyArticlesRoutingModule, ComponentsModule, PrimeNgModule],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MyArticlesModule {}
