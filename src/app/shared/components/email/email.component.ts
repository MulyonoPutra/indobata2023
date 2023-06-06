import { Component, Input, OnInit } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-email',
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
	@Input('align')
	align = 'center';

	protected iconEmail = pathAssets.iconEmail;

	constructor() {}

	ngOnInit(): void {}
}
