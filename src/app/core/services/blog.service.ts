import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BlogArrayType } from '../domain/blog';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Blog } from '../domain/blog';

@Injectable({
	providedIn: 'root',
})
export class BlogService {
	private mockData = 'assets/data/blog.json';

	constructor(private http: HttpClient) {}

	loadAll(): Observable<BlogArrayType> {
		return this.http.get<BlogArrayType>(this.mockData).pipe(catchError(this.handleError));
	}

	loadBlogById(id: string): Observable<Blog> {
		return this.http
			.get<BlogArrayType>(this.mockData)
			.pipe(map((blogs) => blogs.find((blog: Blog) => blog.id === id)!));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
