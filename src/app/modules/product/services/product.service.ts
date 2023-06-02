import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Product, ProductsType } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private mockProduct = 'assets/data/product.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductsType> {
    return this.http
      .get<Product[]>(this.mockProduct)
      .pipe(catchError(this.handleError));
  }

  getProductById(id: string): Observable<Product> {
    return this.http
      .get<Product[]>(this.mockProduct)
      .pipe(
        map(
          (products) => products.find((product: Product) => product.id === id)!
        )
      );
  }

  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return throwError(() => new Error('Internal Server Error'));
  }
}
