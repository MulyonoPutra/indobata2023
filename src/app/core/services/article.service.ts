import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpResponseEntity, ResponseMessageEntity } from '../domain/http-response-entity';
import { Observable, catchError, throwError } from 'rxjs';

import { Article } from '../domain/article';
import { Category } from '../domain/category';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
	providedIn: 'root',
})
export class ArticleService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	findAll(): Observable<HttpResponseEntity<Article[]>> {
		return this.http.get<HttpResponseEntity<Article[]>>(`${this.env}/article`).pipe(catchError(this.handleError));
	}

	findById(id: string): Observable<HttpResponseEntity<Article>> {
		return this.http
			.get<HttpResponseEntity<Article>>(`${this.env}/article/${id}`)
			.pipe(catchError(this.handleError));
	}

	findCategories(): Observable<HttpResponseEntity<Category[]>> {
		return this.http
			.get<HttpResponseEntity<Category[]>>(`${this.env}/article-category`)
			.pipe(catchError(this.handleError));
	}

	create(body: FormData): Observable<ResponseMessageEntity> {
		return this.http.post<ResponseMessageEntity>(`${this.env}/article`, body).pipe(catchError(this.handleError));
	}

	update(body: FormData, id: string): Observable<ResponseMessageEntity> {
		return this.http
			.put<ResponseMessageEntity>(`${this.env}/article/${id}`, body)
			.pipe(catchError(this.handleError));
	}

	findArticlesByUserId(id: string): Observable<HttpResponseEntity<Article[]>> {
		return this.http
			.get<HttpResponseEntity<Article[]>>(`${this.env}/article/user/${id}`)
			.pipe(catchError(this.handleError));
	}

	remove(id: string): Observable<ResponseMessageEntity> {
		return this.http
			.delete<ResponseMessageEntity>(`${this.env}/article/user/${id}`)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
