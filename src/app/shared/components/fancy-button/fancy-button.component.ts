import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'app-fancy-button',
	templateUrl: './fancy-button.component.html',
	styleUrls: ['./fancy-button.component.scss'],
})
export class FancyButtonComponent {
	@Input() label!: string;
  @Input() value!: any;
  @Output() fileSelected: EventEmitter<Event> = new EventEmitter<Event>();

  onChange(event: Event) {
    this.fileSelected.emit(event);
  }
}
