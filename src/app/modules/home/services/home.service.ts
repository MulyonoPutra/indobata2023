import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { features } from 'src/assets/data/features';
import { hero } from 'src/assets/data/hero';
import { marketplace } from 'src/assets/data/marketplace';
import { products } from 'src/assets/data/product';
import { testimonials } from 'src/assets/data/testimonials';
import { Features } from '../models/features';
import { Hero } from '../models/hero';
import { Marketplace } from '../models/marketplace';
import { Product } from '../models/product';
import { Testimonials } from '../models/testimonials';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private mockFeatures = features;
  private mockProduct = products;
  private mockLogo = marketplace;
  private mockTestimonials = testimonials;
  private mockHeros = hero;

  constructor() {}

  getHeroSection(): Observable<Hero[]> {
    return of(this.mockHeros).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getFeatures(): Observable<Features> {
    return of(this.mockFeatures).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return of(this.mockProduct).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
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
}
