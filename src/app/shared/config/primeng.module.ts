import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';

@NgModule({
	exports: [InputTextModule, DialogModule, InputMaskModule, CalendarModule, MessagesModule],
	providers: [],
})
export class PrimeNgModule {}
