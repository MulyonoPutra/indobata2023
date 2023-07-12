import { Component, OnInit } from '@angular/core';

import { CapitalizePipe } from 'src/app/shared/pipes/capitalize.pipe';
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
	protected address!: string;

	constructor(
		public router: Router,
		private userService: UserService,
		private storage: StorageService,
		private capitalize: CapitalizePipe
	) {}

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
				const districts = this.capitalize.transform(response.data.address.districts);
				this.address = `${districts}, ${this.capitalized(response.data.address.provinces)}`;
			},
			error: (error: HttpErrorResponse) => {
				alert(error.message);
			},
			complete: () => {},
		});
	}

	edit() {
		this.router.navigate(['profile-update/' + this.userId]);
	}

	capitalized(city: string) {
    const [firstWord, ...restWords] = city.split(' ');
    const capitalizedSecondWord = restWords.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
    const transform = `${firstWord} ${capitalizedSecondWord}`;
    return transform;
  }
}
