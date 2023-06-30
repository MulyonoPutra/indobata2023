import { Component, HostListener, OnInit } from '@angular/core';
import { timer, take } from 'rxjs';
import { MenuItems } from 'src/app/configs/menu-items';
import { pathAssets } from 'src/app/configs/path-assets';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageService } from 'src/app/core/services/storage.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

	protected isMenuScrolled: boolean = false;
	protected isSidebarShowing: boolean = false;
  protected isTokenAvailable: boolean = false;
	protected showDropdown!: boolean;
	protected iconOpen = pathAssets.iconOpened;
	protected iconClosed = pathAssets.iconClosed;
	protected iconArrowUp = pathAssets.iconArrowUp;
	protected menuitems = MenuItems;
  protected username!: string;

  constructor(
		private storage: StorageService,
    private authService: AuthService
	) {}

  ngOnInit(): void {
    this.setUsername();
  }

  setUsername() {
    this.isTokenAvailable = this.storage.getToken() ? true : false;
    if(this.isTokenAvailable) {
      this.username = this.storage.getUsername();
    }
  }

	@HostListener('window:scroll', ['$event'])
	scrollCheck() {
		if (window.scrollY > 100) this.isMenuScrolled = true;
		else this.isMenuScrolled = false;
	}

	openSideBar() {
		this.isSidebarShowing = true;
	}

	closeSideBar() {
		this.isSidebarShowing = false;
	}

	scrollToTop() {
		document.body.scrollIntoView({ behavior: 'smooth' });
	}

	public toggleDropdown() {
		this.showDropdown = !this.showDropdown;
	}

	handleClickOutside() {
		this.showDropdown = false;
	}

	scrolledStyled() {
		this.isMenuScrolled
			? 'fixed top-0 w-full bg-white shadow-xl animate-slideInDown animate-faster'
			: 'pt-2 lg:pt-0 md:lg-0';
	}

  logout() {
    timer(2000)
    .pipe(take(1))
    .subscribe(() => {
      this.authService.logout();
      window.location.reload();
    });
  }
}
