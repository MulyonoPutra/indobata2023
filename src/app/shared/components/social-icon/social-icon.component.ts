import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialIconComponent {
  @Input('color')
  color = 'dynamic';

  @Input('align')
  align = 'center';
}
