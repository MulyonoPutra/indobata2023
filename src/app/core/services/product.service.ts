import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import {
	Product,
	ProductCategoriesType,
	ProductsArrayType,
} from '../domain/product';

export type ProductResponseEntity = HttpResponseEntity<ProductsArrayType>;
export type ProductCategoriesResponseEntity =
	HttpResponseEntity<ProductCategoriesType>;

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	loadAll(page: number, limit: number): Observable<ProductResponseEntity> {
		return this.http
			.get<ProductResponseEntity>(`${this.env}/product?page=${page}&limit=${limit}`)
			.pipe(catchError(this.handleError));
	}

	findById(id: string): Observable<HttpResponseEntity<Product>> {
		return this.http
			.get<HttpResponseEntity<Product>>(`${this.env}/product/${id}`)
			.pipe(catchError(this.handleError));
	}

	findProductCategories(): Observable<ProductCategoriesResponseEntity> {
		return this.http
			.get<ProductCategoriesResponseEntity>(
				`${this.env}/product-category`
			)
			.pipe(catchError(this.handleError));
	}

	findProductsByCategoryId(id: string): Observable<ProductResponseEntity> {
		return this.http
			.get<ProductResponseEntity>(`${this.env}/product/category/${id}`)
			.pipe(catchError(this.handleError));
	}

  private handleError(error: HttpErrorResponse | any) {
    console.log('Caught an error: ', error);

    let errorMessage: string;
    if (error instanceof HttpErrorResponse && error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `An error occurred: ${error.error.message}`;
    } else if (error instanceof HttpErrorResponse && error.status === 400) {
      // Server-side error with status code 400
      errorMessage = error.error; // Assuming the error message is sent as a string
    } else {
      // Other types of errors
      errorMessage = 'An unexpected error occurred.';
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
