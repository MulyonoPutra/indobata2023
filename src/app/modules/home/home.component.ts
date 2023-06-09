import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Features, FeaturesArrayType } from '../../core/domain/features';
import { HomeService } from '../../core/services/home.service';
import { Hero } from 'src/app/core/domain/hero';
import { Marketplace } from 'src/app/core/domain/marketplace';
import { ProductsType } from 'src/app/core/domain/product';
import {
	Testimonials,
	TestimonialsArrayType,
} from 'src/app/core/domain/testimonials';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [HomeService],
})
export class HomeComponent implements OnInit, OnDestroy {
	protected features!: Features[];
	protected products!: ProductsType;
	protected logo: Marketplace[] = [];
	protected heros: Hero[] = [];
	protected testimonials!: TestimonialsArrayType;
	protected subscriptions: Subscription[] = [];

	constructor(
		private homeService: HomeService,
		private testimonialService: TestimonialsService
	) {}

	ngOnInit(): void {
		this.fetchMockData();
	}

	fetchMockData(): void {
		this.getHero();
		this.getFeatures();
		this.getProducts();
		this.getLogo();
		this.getTestimonials();
	}

	getHero(): void {
		this.subscriptions.push(
			this.homeService.getHeroSection().subscribe({
				next: (data: Hero[]) => {
					this.heros = data;
				},
				error: () => {
					console.log('error');
				},
			})
		);
	}

	getFeatures(): void {
		this.subscriptions.push(
			this.homeService.getFeatures().subscribe({
				next: (response: FeaturesArrayType) => {
					this.features = response;
				},
				error: (error) => {
					console.error(error);
				},
			})
		);
	}

	getProducts(): void {
		this.subscriptions.push(
			this.homeService.getProducts().subscribe({
				next: (data: ProductsType) => {
					this.products = data;
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	getLogo(): void {
		this.subscriptions.push(
			this.homeService.getMarketplaceLogo().subscribe({
				next: (data: Marketplace[]) => {
					this.logo = data;
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	getTestimonials(): void {
		this.subscriptions.push(
			this.testimonialService.loadAll().subscribe({
				next: (response: HttpResponseEntity<TestimonialsArrayType>) => {
					this.testimonials = response.data;
				},
				error: (error) => {
					console.log(error);
				},
			})
		);
	}

	ngOnDestroy(): void {
		this.subscriptions.forEach((subs) => {
			subs.unsubscribe();
		});
	}
}
