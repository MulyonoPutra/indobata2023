import { Component, OnDestroy, OnInit } from '@angular/core';
import { pathAssets } from 'src/app/configs/path-assets';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/modules/home/models/product';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  protected iconArrowLeft = pathAssets.iconArrowLeft;
  protected products!: Product[];
  protected subscriptions: Subscription[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(
      {
        next: (data: Product[]) => {
          this.products = data
        },
        error: (error) => {
          console.log(error);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
  }

}
