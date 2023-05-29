import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  maps: string = 'https://maps.google.com/maps?width=100%&height=600&hl=en&q=-6.8938371908652885, 106.79983021947811&ie=UTF8&t=&z=14&iwloc=B&output=embed'
}
