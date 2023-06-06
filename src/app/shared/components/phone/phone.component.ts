import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-phone',
	templateUrl: './phone.component.html',
	styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
	@Input('align')
	align = 'center';

	constructor() {}
}
