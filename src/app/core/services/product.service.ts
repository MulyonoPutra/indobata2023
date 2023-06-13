import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { Product, ProductsArrayType } from '../domain/product';

export type ProductResponseEntity = HttpResponseEntity<ProductsArrayType>;

@Injectable({
	providedIn: 'root',
})
export class ProductService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	loadAll(): Observable<ProductResponseEntity> {
		return this.http
			.get<ProductResponseEntity>(`${this.env}/product`)
			.pipe(catchError(this.handleError));
	}

  findById(id: string): Observable<HttpResponseEntity<Product>> {
    return this.http.get<HttpResponseEntity<Product>>(`${this.env}/product/${id}`)
    .pipe(catchError(this.handleError));
  }

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
