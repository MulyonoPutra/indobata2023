import { Component, HostListener } from '@angular/core';
import { MenuItems } from 'src/app/configs/menu-items';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  isMenuScrolled = false;
  isSidebarShowing = false;

  menuitems = MenuItems;

  @HostListener('window:scroll', ['$event'])
  scrollCheck() {
    if (window.pageYOffset > 100) this.isMenuScrolled = true;
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

  scrolledStyled() {
    this.isMenuScrolled ? 'fixed top-0 w-full bg-white shadow-xl animate-slideInDown animate-faster' : 'pt-2 lg:pt-0 md:lg-0'
  }
}

// Color Combination: https://www.colorcombos.com/color-schemes/221/ColorCombo221.html