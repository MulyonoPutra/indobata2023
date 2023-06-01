import { Component } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
  selector: 'app-card-product-hover',
  templateUrl: './card-product-hover.component.html',
  styleUrls: ['./card-product-hover.component.scss'],
})
export class CardProductHoverComponent {
  protected iconArrowLeft = pathAssets.iconArrowLeft;
}
