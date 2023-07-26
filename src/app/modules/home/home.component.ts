import { Component, OnDestroy, OnInit } from '@angular/core';
import { Features, FeaturesArrayType } from '../../core/domain/features';
import { ProductResponseEntity, ProductService } from 'src/app/core/services/product.service';

import { AlertService } from 'src/app/shared/services/alert.service';
import { Hero } from 'src/app/core/domain/hero';
import { HomeService } from '../../core/services/home.service';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { Marketplace } from 'src/app/core/domain/marketplace';
import { OverviewSection } from 'src/app/core/domain/overview';
import { OverviewService } from 'src/app/core/services/overview.service';
import { ProductsArrayType } from 'src/app/core/domain/product';
import { Subscription } from 'rxjs';
import { TestimonialsArrayType } from 'src/app/core/domain/testimonials';
import { TestimonialsService } from 'src/app/core/services/testimonials.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	providers: [HomeService],
})
export class HomeComponent implements OnInit, OnDestroy {
	protected features!: Features[];
	protected products!: ProductsArrayType;
	protected logo: Marketplace[] = [];
	protected heros: Hero[] = [];
	protected testimonials!: TestimonialsArrayType;
	protected overview!: OverviewSection;
	protected subscriptions: Subscription[] = [];

	constructor(
		private homeService: HomeService,
		private testimonialService: TestimonialsService,
		private overviewService: OverviewService,
		private productService: ProductService,
		private alertService: AlertService
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
		this.getOverview();
	}

	getOverview(): void {
		this.subscriptions.push(
			this.overviewService.loadOverview().subscribe({
				next: (overview: OverviewSection) => {
					this.overview = overview;
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
				},
			})
		);
	}

	getHero(): void {
		this.subscriptions.push(
			this.homeService.getHeroSection().subscribe({
				next: (data: Hero[]) => {
					this.heros = data;
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
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
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
				},
			})
		);
	}

	getProducts(): void {
		this.subscriptions.push(
			this.productService.loadAll(1, 10).subscribe({
				next: (response: ProductResponseEntity) => {
					this.products = response.data;
				},
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
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
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
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
				error: (error: HttpErrorResponse) => {
					this.alertService.errors('Error', error.message);
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
