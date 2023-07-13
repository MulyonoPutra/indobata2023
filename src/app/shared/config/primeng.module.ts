import { NgModule } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
	exports: [InputTextModule, DialogModule],
	providers: [],
})
export class PrimeNgModule {}
