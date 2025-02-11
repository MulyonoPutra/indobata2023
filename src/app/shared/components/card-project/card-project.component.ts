import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from 'src/app/core/domain/project';

@Component({
	selector: 'app-card-project',
	templateUrl: './card-project.component.html',
	styleUrls: ['./card-project.component.scss'],
})
export class CardProjectComponent {
	@Input() project!: Project;
	@Output() callParentEvent = new EventEmitter<void>();
}
