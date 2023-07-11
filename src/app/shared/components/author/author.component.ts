import { Component, Input } from '@angular/core';

import { Author } from 'src/app/core/domain/author';

@Component({
	selector: 'app-author',
	templateUrl: './author.component.html',
	styleUrls: ['./author.component.scss'],
})
export class AuthorComponent {
	@Input() author!: Author;
}
