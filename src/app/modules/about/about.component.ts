import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AboutService } from './services/about.service';
import { About } from './models/about';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit, OnDestroy {
  protected subscriptions: Subscription[] = [];
  protected about!: About;

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.getAboutSections();
  }

  getAboutSections(): void {
    this.subscriptions.push(this.aboutService.getAboutSection().subscribe(
        {
          next: (response: About) => this.about = response
        },
      )
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subs) => {
      subs.unsubscribe();
    });
  }
}
