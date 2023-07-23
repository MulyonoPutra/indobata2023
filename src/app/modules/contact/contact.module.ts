import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [ContactComponent],
	imports: [CommonModule, ContactRoutingModule, FormsModule, ReactiveFormsModule, ComponentsModule, TranslateModule],
})
export class ContactModule {}
