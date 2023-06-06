import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-brand-logo',
	template: `
		<a routerLink="/">
			<img
				[src]="logo"
				alt="Logo"
				height="{{ height }}"
				width="{{ width }}" />
		</a>
	`,
})
export class BrandLogoComponent {
	@Input() height?: number = 70;
	@Input() width?: number = 70;

	logo: string = '../assets/images/indobata-logo.png';
}
