import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ProfileUpdateRoutingModule } from './profile-update-routing.module';
import { ProfileUpdateComponent } from './profile-update.component';

@NgModule({
	declarations: [ProfileUpdateComponent],
	imports: [
		CommonModule,
		ProfileUpdateRoutingModule,
		LazyLoadImageModule,
		ComponentsModule,
		FormsModule,
		ReactiveFormsModule,
	],
})
export class ProfileUpdateModule {}
