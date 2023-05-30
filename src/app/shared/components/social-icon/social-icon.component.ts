import { Component, Input } from '@angular/core';
import { socialIcons } from 'src/assets/data/social-icons';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent {
  @Input('color')
  color = 'dynamic';

  @Input('align')
  align = 'center';

  protected icons = socialIcons;

  navigate(url: string): void {
    window.open(url, '_blank');
  }
}
