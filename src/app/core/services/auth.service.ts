import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { Login, LoginDTO } from '../domain/login';
import { Register } from '../domain/register';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	register(
		body: Register
	): Observable<HttpResponseEntity<Partial<Register>>> {
		return this.http
			.post<HttpResponseEntity<Partial<Register>>>(
				`${this.env}/auth/register`,
				body
			)
			.pipe(catchError(this.handleError));
	}

	login(body: Login): Observable<HttpResponseEntity<LoginDTO>> {
		return this.http
			.post<HttpResponseEntity<LoginDTO>>(`${this.env}/auth/login`, body)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
