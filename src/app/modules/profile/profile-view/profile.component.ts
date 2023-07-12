import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse } from '@angular/common/http';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/services/storage.service';
import { User } from 'src/app/core/domain/user';
import { UserService } from 'src/app/core/services/user.service';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
	protected userId!: string;
	protected user!: User;

	constructor(public router: Router, private userService: UserService, private storage: StorageService) {}

	ngOnInit(): void {
		this.getUserId();
		this.getUserInfo();
	}

	getUserId() {
		if (this.storage.getToken()) {
			this.userId = this.storage.getId();
		}
	}

	getUserInfo(): void {
		this.userService.findUserById(this.userId).subscribe({
			next: (response: HttpResponseEntity<User>) => {
				this.user = response.data;
			},
			error: (error: HttpErrorResponse) => {
				alert(error.message);
			},
			complete: () => {
				// Handle the case when user is undefined
				if (!this.user) {
					// Perform necessary actions (e.g., show error message, redirect, etc.)
				}
			},
		});
	}

	edit() {
		this.router.navigate(['profile-update/' + this.userId]);
	}
}
