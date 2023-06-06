import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
	selector: 'app-about-section',
	templateUrl: './about-section.component.html',
	styleUrls: ['./about-section.component.scss'],
})
export class AboutSectionComponent implements OnInit {
	@Input() heros!: Hero[];
	hero!: Hero;

	ngOnInit(): void {
		this.getAboutData();
	}

	getAboutData() {
		if (this.heros && this.heros.length > 0) {
			this.hero = this.heros.find((element) => element.id === '2')!;
		}
	}
}
