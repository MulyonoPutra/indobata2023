import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Features } from './models/features';
import { Marketplace } from './models/marketplace';
import { Product } from './models/product';
import { HomeService } from './services/home.service';
import { Testimonials } from './models/testimonials';
import { Hero } from './models/hero';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService],
})
export class HomeComponent implements OnInit, OnDestroy {

  protected features!: Features;
  protected products!: Product[];
  protected logo: Marketplace[] = [];
  protected heros: Hero[] = [];
  protected testimonials: Testimonials[] = [];
  protected subscriptions: Subscription[] = [];

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.fetchMockData();
  }

  fetchMockData(): void {
    this.getHero();
    this.getFeatures();
    this.getProducts();
    this.getLogo();
    this.getTestimonials();
  }

  getHero(): void {
    this.subscriptions.push(
      this.homeService.getHeroSection().subscribe({
        next: (data: Hero[]) => {
          this.heros = data;
        },
        error: () => {
          console.log('error');
        },
      })
    );
  }

  getFeatures(): void {
    this.subscriptions.push(
      this.homeService.getFeatures().subscribe({
        next: (data: Features) => {
          this.features = data;
        },
        error: () => {
          console.log('error');
        },
      })
    );
  }

  getProducts(): void {
    this.subscriptions.push(
      this.homeService.getProducts().subscribe({
        next: (data: Product[]) => {
          this.products = data;
        },
        error: () => {
          console.log('error');
        },
      })
    );
  }

  getLogo(): void {
    this.subscriptions.push(
      this.homeService.getMarketplaceLogo().subscribe({
        next: (data: Marketplace[]) => {
          this.logo = data;
        },
        error: () => {
          console.log('error');
        },
      })
    );
  }

  getTestimonials(): void {
    this.subscriptions.push(
      this.homeService.getTestimonials().subscribe({
        next: (data: Testimonials[]) => {
          this.testimonials = data;
        },
        error: () => {
          console.log('error');
        },
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
  }
}
