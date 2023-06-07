import { Component, Input, OnInit } from '@angular/core';
import { Hero } from 'src/app/core/domain/hero';

@Component({
	selector: 'app-hero',
	templateUrl: './hero.component.html',
	styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
	@Input() heros!: Hero[];
	hero!: Hero;

	ngOnInit(): void {
		this.getHero();
	}

	getHero() {
		if (this.heros && this.heros.length > 0) {
			this.hero = this.heros.find((element) => element.id === '1')!;
		}
	}
}
