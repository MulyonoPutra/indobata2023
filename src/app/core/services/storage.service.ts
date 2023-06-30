import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

const TOKEN_KEY = 'AccessToken';
const USER_ID = 'UserId';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private token!: string | null;

  constructor(private cookieService: CookieService) {}

  public setToken(token: string): void {
		this.token = token;
		this.cookieService.delete(TOKEN_KEY, '/');
		this.cookieService.set(TOKEN_KEY, token);
	}

	public getToken(): string {
		return this.cookieService.get(TOKEN_KEY);
	}

	public getId(): string {
		return this.cookieService.get(USER_ID);
	}

	public setId(id: string): void {
		this.cookieService.delete(USER_ID);
		this.cookieService.set(USER_ID, id);
	}

  public setUsername(username: string): void {
		this.cookieService.delete(USERNAME_KEY);
		this.cookieService.set(USERNAME_KEY, username);
	}

	public getUsername(): string {
		return this.cookieService.get(USERNAME_KEY);
	}

  public clearCookies(): void {
		this.token = null;
		this.cookieService.deleteAll('/');
	}
}
