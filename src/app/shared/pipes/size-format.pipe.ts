import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sizeFormat',
})
export class SizeFormatPipe implements PipeTransform {
	transform(size: number): string {
		if (size < 1024) {
			return size + ' B';
		} else if (size < 1024 * 1024) {
			return (size / 1024).toFixed(2) + ' KB';
		} else {
			return (size / (1024 * 1024)).toFixed(2) + ' MB';
		}
	}
}
