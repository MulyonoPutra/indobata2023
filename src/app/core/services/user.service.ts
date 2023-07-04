import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HttpResponseEntity } from '../domain/http-response-entity';
import { User } from '../domain/user';

@Injectable({
	providedIn: 'root',
})
export class UserService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	findUserById(id: string): Observable<HttpResponseEntity<User>> {
		return this.http.get<HttpResponseEntity<User>>(
			`${this.env}/user/${id}`
		);
	}

	update(body: FormData, id: string): Observable<HttpResponseEntity<User>> {
		return this.http.post<HttpResponseEntity<User>>(
			`${this.env}/user/${id}`,
			body
		);
	}
}
