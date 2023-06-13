import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
	Observable,
	catchError,
	combineLatest,
	map,
	of,
	throwError,
} from 'rxjs';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { hero } from 'src/assets/data/hero';
import { marketplace } from 'src/assets/data/marketplace';
import { testimonials } from 'src/assets/data/testimonials';
import { environment } from 'src/environments/environment.development';
import { Features, FeaturesArrayType } from '../domain/features';
import { Hero } from '../domain/hero';
import { Marketplace } from '../domain/marketplace';
import { Testimonials } from '../domain/testimonials';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	private mockProduct = 'assets/data/product.json';
	private iconPath = 'assets/data/features-icon.json';
	private mockLogo = marketplace;
	private mockTestimonials = testimonials;
	private mockHeros = hero;

	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getHeroSection(): Observable<Hero[]> {
		return of(this.mockHeros).pipe(
			catchError((error) => {
				console.error('Error occurred:', error);
				return throwError(() => error);
			})
		);
	}

	getFeatures(): Observable<Features[]> {
		const icons = this.http.get(this.iconPath);
		const features = this.http.get<HttpResponseEntity<FeaturesArrayType>>(
			`${this.env}/features`
		);

		return combineLatest([icons, features]).pipe(
			map(([icons, response]) => {
				const iconsArray = Object.values(icons);
				return response.data.map((item, index) => {
					return {
						...item,
						icon: iconsArray[index]?.icon || '',
					};
				});
			})
		);
	}

	getMarketplaceLogo(): Observable<Marketplace[]> {
		return of(this.mockLogo).pipe(
			catchError((error) => {
				console.error('Error occurred:', error);
				return throwError(() => error);
			})
		);
	}

	getTestimonials(): Observable<Testimonials[]> {
		return of(this.mockTestimonials).pipe(
			catchError((error) => {
				console.error('Error occurred:', error);
				return throwError(() => error);
			})
		);
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
