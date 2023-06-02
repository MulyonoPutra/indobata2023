import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { features } from 'src/assets/data/features';
import { hero } from 'src/assets/data/hero';
import { marketplace } from 'src/assets/data/marketplace';
import { testimonials } from 'src/assets/data/testimonials';
import { ProductsType } from '../../product/models/product';
import { Features } from '../models/features';
import { Hero } from '../models/hero';
import { Marketplace } from '../models/marketplace';
import { Testimonials } from '../models/testimonials';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private mockFeatures = features;
  private mockProduct = 'assets/data/product.json';
  private mockLogo = marketplace;
  private mockTestimonials = testimonials;
  private mockHeros = hero;

  constructor(private http: HttpClient) {}

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

  getProducts(): Observable<ProductsType> {
    return this.http
      .get<ProductsType>(this.mockProduct)
      .pipe(catchError(this.handleError));
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
