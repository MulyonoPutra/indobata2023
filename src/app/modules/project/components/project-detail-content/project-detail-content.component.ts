import { Component, Input } from '@angular/core';

import { Project } from 'src/app/core/domain/project';

@Component({
	selector: 'app-project-detail-content',
	templateUrl: './project-detail-content.component.html',
	styleUrls: ['./project-detail-content.component.scss'],
})
export class ProjectDetailContentComponent {
	@Input() project?: Project;
}
