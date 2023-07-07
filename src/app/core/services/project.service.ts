import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { Project, ProjectsArrayType } from '../domain/project';

export type ProjectResponseEntity = HttpResponseEntity<ProjectsArrayType>;

@Injectable({
	providedIn: 'root',
})
export class ProjectService {
	private mockData = 'assets/data/projects.json';
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	// mock data
	getProjects(): Observable<Project[]> {
		return this.http.get<Project[]>(this.mockData).pipe(catchError(this.handleError));
	}

	loadAll(page: number, limit: number): Observable<ProjectResponseEntity> {
		return this.http
			.get<ProjectResponseEntity>(`${this.env}/project?page=${page}&limit=${limit}`)
			.pipe(catchError(this.handleError));
	}

	findById(id: string): Observable<HttpResponseEntity<Project>> {
		return this.http
			.get<HttpResponseEntity<Project>>(`${this.env}/project/${id}`)
			.pipe(catchError(this.handleError));
	}

	private handleError(res: HttpErrorResponse | any) {
		console.error(res.error || res.body.error);
		return throwError(() => new Error('Internal Server Error'));
	}
}
