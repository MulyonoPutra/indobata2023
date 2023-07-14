import { NgModule } from '@angular/core';
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';

@NgModule({
	exports: [InputTextModule, DialogModule, InputMaskModule, CalendarModule, MessagesModule, InputTextareaModule],
	providers: [],
})
export class PrimeNgModule {}
