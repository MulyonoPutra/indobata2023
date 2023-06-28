import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { ShortenerTextPipe } from './pipes/shortener-text.pipe';

@NgModule({
	declarations: [ClickOutsideDirective, ShortenerTextPipe],
	imports: [CommonModule],
	exports: [ClickOutsideDirective, ShortenerTextPipe],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
