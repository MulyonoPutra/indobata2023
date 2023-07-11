import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CapitalizePipe } from './pipes/capitalize.pipe';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CommonModule } from '@angular/common';
import { ShortenerTextPipe } from './pipes/shortener-text.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';

@NgModule({
	declarations: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe, TimeAgoPipe],
	imports: [CommonModule],
	exports: [ClickOutsideDirective, ShortenerTextPipe, CapitalizePipe, TimeAgoPipe],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
