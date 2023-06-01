import { Injectable } from '@angular/core';
import { Observable, of, catchError, throwError } from 'rxjs';
import { products } from 'src/assets/data/product';
import { Product } from '../../home/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private mockProduct = products

  constructor() { }

  getProducts(): Observable<Product[]> {
    return of(this.mockProduct).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }

  getProductById(id: string) {
    return this.mockProduct.find(product => product.id === id)
  }
}
