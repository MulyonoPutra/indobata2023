/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	HttpEvent,
	HttpHandler,
	HttpInterceptor,
	HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(
		private storageService: StorageService,
		private authService: AuthService,
		private route: Router
	) {}

	intercept(
		request: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {
		const token = this.storageService.getToken();
		// const tokenEncoded = atob(token);

		if (token) {
			request = request.clone({
				setHeaders: { Authorization: `Bearer ${token}` },
			});
		}
		return next.handle(request).pipe(
			catchError((err) => {
				if (err.status >= 400) {
					this.route.navigate(['/login']);
					this.authService.logout();
				}
				const error = err.error.message || err.statusText;
				return throwError(() => error);
			})
		);
	}
}
