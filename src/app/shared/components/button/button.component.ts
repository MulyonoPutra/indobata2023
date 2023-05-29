import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

  @Input('disabled')
  disabled = false;
  
  @Input('size')
  size = 'S'; // S,M,L

  @Input('shade')
  shade = 'NA'; // D,L,W,NA

  @Input('animation')
  animation='F'; // C,F

  @Input('name')
  name=''; 

  constructor() { }

  ngOnInit(): void {
  }

}