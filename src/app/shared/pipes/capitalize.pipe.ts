import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
	transform(value: string): string {
		const words = value?.split(' ');
		for (let i = 0; i < words?.length; i++) {
			words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
		}
		return words?.join(' ');
	}
}
