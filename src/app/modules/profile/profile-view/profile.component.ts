import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {

  constructor(public router: Router, private route: ActivatedRoute) {}

  edit() {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.router.navigate(['/profile-update' + id])
  }
}
