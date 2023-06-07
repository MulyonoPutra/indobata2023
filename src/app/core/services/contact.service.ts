import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Contact } from '../domain/contact';
import { HttpResponseEntity } from '../domain/http-response-entity';

@Injectable({
	providedIn: 'root',
})
export class ContactService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	submitFeedback(contact: Contact): Observable<HttpResponseEntity<Contact>> {
		return this.http
			.post<HttpResponseEntity<Contact>>(`${this.env}/contact`, contact)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
