import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard {
	constructor(private storage: StorageService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		if (!this.storage.getToken()) {
			alert('You cannot access this page, please login first!');
			this.router.navigate(['/login'], {
				queryParams: { returnUrl: state.url },
				replaceUrl: true,
			});
			return false;
		}
		return true;
	}
}
