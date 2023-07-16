import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [AboutComponent],
	imports: [CommonModule, AboutRoutingModule, LazyLoadImageModule, ComponentsModule],
})
export class AboutModule {}
