import { Component, Input } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { Product } from 'src/app/core/domain/product';

@Component({
	selector: 'app-card-product-hover',
	templateUrl: './card-product-hover.component.html',
	styleUrls: ['./card-product-hover.component.scss'],
})
export class CardProductHoverComponent {
	protected iconArrowLeft = pathAssets.iconArrowLeft;
	showTooltipFlag = false;
	@Input() product!: Product;

  showTooltip() {
		this.showTooltipFlag = true;
	}

	hideTooltip() {
		this.showTooltipFlag = false;
	}
}
