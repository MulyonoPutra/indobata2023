import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { About } from '../domain/about';

@Injectable({
	providedIn: 'root',
})
export class AboutService {
	private mockData = 'assets/data/about.json';

	constructor(private http: HttpClient) {}

	getAboutSection(): Observable<About> {
		return this.http
			.get<About>(this.mockData)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
