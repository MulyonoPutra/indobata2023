import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ShortenerTextPipe } from './pipes/shortener-text.pipe';
import { SizeFormatPipe } from './pipes/size-format.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
	declarations: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe, TimeAgoPipe, SizeFormatPipe],
	imports: [CommonModule],
	exports: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe, TimeAgoPipe, SizeFormatPipe],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
