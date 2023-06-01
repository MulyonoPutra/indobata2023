import { Component, Input } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Product } from 'src/app/modules/home/models/product';

@Component({
  selector: 'app-card-product-hover',
  templateUrl: './card-product-hover.component.html',
  styleUrls: ['./card-product-hover.component.scss'],
})
export class CardProductHoverComponent {
  protected iconArrowLeft = pathAssets.iconArrowLeft;

  @Input() product!: Product;
  
}
