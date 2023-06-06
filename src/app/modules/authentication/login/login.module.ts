import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
	declarations: [LoginComponent],
	imports: [
		CommonModule,
		LoginRoutingModule,
		ComponentsModule,
		LazyLoadImageModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class LoginModule {}
