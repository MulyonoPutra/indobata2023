import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';

@NgModule({
	declarations: [ContactComponent],
	imports: [
		CommonModule,
		ContactRoutingModule,
		FormsModule,
		ReactiveFormsModule,
		ComponentsModule,
	],
})
export class ContactModule {}
