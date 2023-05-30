import { Component, Input } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Product } from 'src/app/modules/home/models/product';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input() product!: Product;
  protected iconArrowLeft = pathAssets.iconArrowLeft;
}
