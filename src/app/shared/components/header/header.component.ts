import { Component, HostListener, OnInit } from '@angular/core';
import { timer, take } from 'rxjs';
import { MenuItems } from 'src/app/configs/menu-items';
import { pathAssets } from 'src/app/configs/path-assets';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { User } from 'src/app/core/domain/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
	protected username!: string;
	protected avatar!: string;
	protected userId!: string;

	protected showDropdown!: boolean;
	protected isMenuScrolled: boolean = false;
	protected isSidebarShowing: boolean = false;
	protected isTokenAvailable: boolean = false;

	protected iconOpen = pathAssets.iconOpened;
	protected iconClosed = pathAssets.iconClosed;
	protected iconArrowUp = pathAssets.iconArrowUp;
	protected menuitems = MenuItems;

	constructor(
		private storage: StorageService,
		private authService: AuthService,
		private userService: UserService
	) {}

	ngOnInit(): void {
		this.setUsername();
		this.userInfo();
	}

	protected setUsername() {
		this.isTokenAvailable = this.storage.getToken() ? true : false;
		if (this.isTokenAvailable) {
			this.userId = this.storage.getId();
		}
	}

	protected userInfo() {
		this.userService.findUserById(this.userId).subscribe({
			next: (response: HttpResponseEntity<User>) => {
				this.avatar = response.data.avatar.url;
				this.username = response.data.username;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	@HostListener('window:scroll', ['$event'])
	scrollCheck() {
		if (window.scrollY > 100) this.isMenuScrolled = true;
		else this.isMenuScrolled = false;
	}

	protected openSideBar() {
		this.isSidebarShowing = true;
	}

	protected closeSideBar() {
		this.isSidebarShowing = false;
	}

	protected scrollToTop() {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}

	public toggleDropdown() {
		this.showDropdown = !this.showDropdown;
	}

	protected handleClickOutside() {
		this.showDropdown = false;
	}

	protected scrolledStyled() {
		this.isMenuScrolled
			? 'fixed top-0 w-full bg-white shadow-xl animate-slideInDown animate-faster'
			: 'pt-2 lg:pt-0 md:lg-0';
	}

	protected logout() {
		timer(2000)
			.pipe(take(1))
			.subscribe(() => {
				this.authService.logout();
				window.location.reload();
			});
	}
}
