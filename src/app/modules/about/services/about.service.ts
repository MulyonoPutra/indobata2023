import { Injectable } from '@angular/core';
import { About } from '../models/about';
import { about } from 'src/assets/data/about';
import { Observable, catchError, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  private mockData = about;

  constructor() { }

  getAboutSection(): Observable<About> {
    return of(this.mockData).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => error);
      })
    );
  }
}
