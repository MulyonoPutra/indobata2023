import { Component, Input } from '@angular/core';
import { Testimonials } from '../../models/testimonials';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent {
  @Input() testimonials!: Testimonials[];

  protected isExpanded = false;
  protected expandedIndex: number | undefined;
  protected quotesIcon: string = '../../../../../assets/images/svg/icon-quotes.svg';

  toggleExpansion(index: number): void {
    if (this.expandedIndex === index) {
      this.expandedIndex = undefined;
    } else {
      this.expandedIndex = index;
    }
  }
  
}
