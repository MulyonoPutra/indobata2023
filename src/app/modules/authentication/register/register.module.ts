import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
	declarations: [RegisterComponent],
	imports: [
		CommonModule,
		RegisterRoutingModule,
		ComponentsModule,
		LazyLoadImageModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class RegisterModule {}
