import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { TestimonialsArrayType } from '../domain/testimonials';

@Injectable({
	providedIn: 'root',
})
export class TestimonialsService {
	private env = environment.apiUrl;
	constructor(private http: HttpClient) {}

	loadAll(): Observable<HttpResponseEntity<TestimonialsArrayType>> {
		return this.http
			.get<HttpResponseEntity<TestimonialsArrayType>>(
				`${this.env}/testimonials`
			)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
