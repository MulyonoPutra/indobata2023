import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/configs/menu-items';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() items!: MenuItem[];

  trackByFn(index: number, item: MenuItem) {
    return item; 
  }
}
