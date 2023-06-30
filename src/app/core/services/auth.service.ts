import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { Login, LoginDTO } from '../domain/login';
import { Register } from '../domain/register';
import { StorageService } from './storage.service';
import { UserIdentity } from '../domain/user';

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient, private storage: StorageService) {}

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

	login(body: Login): Observable<UserIdentity> {
		return this.http
			.post<HttpResponseEntity<LoginDTO>>(`${this.env}/auth/login`, body)
			.pipe(
				map((response) => {
					const token = response.data.accessToken;
					const id = response.data.user._id;
					const name = response.data.user.username;

					this.storage.setToken(token);
					this.storage.setId(id);
					this.storage.setUsername(name);

					return {
						id,
					};
				})
			);
	}

	logout() {
		this.storage.clearCookies();
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
