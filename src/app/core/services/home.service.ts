import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, combineLatest, map, of, throwError } from 'rxjs';
import { Features, FeaturesArrayType } from '../domain/features';

import { Injectable } from '@angular/core';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { hero } from 'src/assets/data/hero';
import { marketplace } from 'src/assets/data/marketplace';
import { testimonials } from 'src/assets/data/testimonials';
import { environment } from 'src/environments/environment.development';
import { Hero } from '../domain/hero';
import { Marketplace } from '../domain/marketplace';
import { Testimonials } from '../domain/testimonials';

@Injectable({
	providedIn: 'root',
})
export class HomeService {
	private iconPath = 'assets/data/features-icon.json';
	private mockLogo = marketplace;
	private mockTestimonials = testimonials;
	private mockHeros = hero;

	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getHeroSection(): Observable<Hero[]> {
		return of(this.mockHeros).pipe(catchError(this.handleError));
	}

	getFeatures(): Observable<Features[]> {
		const icons = this.http.get(this.iconPath);
		const features = this.http.get<HttpResponseEntity<FeaturesArrayType>>(`${this.env}/features`);

		return combineLatest([icons, features]).pipe(
			map(([icons, response]) => {
				const iconsArray = Object.values(icons);
				return response.data.map((item, index) => {
					return {
						...item,
						icon: iconsArray[index]?.icon || '',
					};
				});
			}, catchError(this.handleError))
		);
	}

	getMarketplaceLogo(): Observable<Marketplace[]> {
		return of(this.mockLogo).pipe(catchError(this.handleError));
	}

	getTestimonials(): Observable<Testimonials[]> {
		return of(this.mockTestimonials).pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
