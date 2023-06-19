import { Component, HostListener } from '@angular/core';
import { MenuItems } from 'src/app/configs/menu-items';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	protected isMenuScrolled: boolean = false;
	protected isSidebarShowing: boolean = false;
	protected showDropdown!: boolean;
	protected iconOpen = pathAssets.iconOpened;
	protected iconClosed = pathAssets.iconClosed;
	protected iconArrowUp = pathAssets.iconArrowUp;
	menuitems = MenuItems;

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

	scrolledStyled() {
		this.isMenuScrolled
			? 'fixed top-0 w-full bg-white shadow-xl animate-slideInDown animate-faster'
			: 'pt-2 lg:pt-0 md:lg-0';
	}
}
