import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ProfileComponent],
	imports: [CommonModule, ProfileRoutingModule, LazyLoadImageModule, SharedModule],
})
export class ProfileModule {}
