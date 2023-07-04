import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ShortenerTextPipe } from './pipes/shortener-text.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
	declarations: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe],
	imports: [CommonModule],
	exports: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
