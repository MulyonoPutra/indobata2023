import { Component } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  protected iconArrowLeft = pathAssets.iconArrowLeft;
}
