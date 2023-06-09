import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { Overview, OverviewSection } from '../domain/overview';

export type OverviewResponseEntity = HttpResponseEntity<Overview>;

@Injectable({
	providedIn: 'root',
})
export class OverviewService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	loadOverview(): Observable<OverviewSection> {
		return this.http
			.get<OverviewResponseEntity>(`${this.env}/overview`)
			.pipe(
				map((response) => {
					let overview = {
						content: response.data.content.paragraph1,
						images: response.data.images.slice(0, 2),
					};

					return overview;
				}),
				catchError(this.handleError)
			);
	}

	loadAll(): Observable<OverviewResponseEntity> {
		return this.http
			.get<OverviewResponseEntity>(`${this.env}/overview`)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
