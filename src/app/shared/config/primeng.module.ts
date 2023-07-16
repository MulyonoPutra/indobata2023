import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { EditorModule } from 'primeng/editor';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MessagesModule } from 'primeng/messages';
import { NgModule } from '@angular/core';

@NgModule({
	exports: [
		InputTextModule,
		DialogModule,
		InputMaskModule,
		CalendarModule,
		MessagesModule,
		InputTextareaModule,
		ChipsModule,
		EditorModule,
		DropdownModule,
	],
	providers: [],
})
export class PrimeNgModule {}
