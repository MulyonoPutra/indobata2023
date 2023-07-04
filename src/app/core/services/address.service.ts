import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Districts, Province, Regencies, Villages } from '../domain/address';
import { Observable } from 'rxjs';
import { HttpResponseEntity } from '../domain/http-response-entity';

@Injectable({
	providedIn: 'root',
})
export class AddressService {
	private env = environment.apiUrl;

	constructor(private http: HttpClient) {}

	findAllProvinces(): Observable<HttpResponseEntity<Province[]>> {
		return this.http.get<HttpResponseEntity<Province[]>>(
			`${this.env}/address/province`
		);
	}

	findAllRegencies(id: string): Observable<HttpResponseEntity<Regencies[]>> {
		return this.http.get<HttpResponseEntity<Regencies[]>>(
			`${this.env}/address/regencies/${id}`
		);
	}

	findAllDistricts(id: string): Observable<HttpResponseEntity<Districts[]>> {
		return this.http.get<HttpResponseEntity<Districts[]>>(
			`${this.env}/address/districts/${id}`
		);
	}

	findAllVillages(id: string): Observable<HttpResponseEntity<Villages[]>> {
		return this.http.get<HttpResponseEntity<Villages[]>>(
			`${this.env}/address/villages/${id}`
		);
	}
}
