import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Project } from '../../core/domain/project';
import * as ProjectActions from '../../core/state/actions/project.actions';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
	projects$: Observable<Project[]> | undefined;
	loading$!: Observable<boolean>;
	error$!: Observable<any>;

	constructor(@Inject(Store<AppState>) private store: Store<AppState>) {}

	ngOnInit(): void {
		this.loadProjects();
	}

	private loadProjects() {
		this.projects$ = this.store
			.select((state) => Object.values(state.projects.entities))
			.pipe(map((projectsArray: any) => projectsArray));
		this.loading$ = this.store.select((state) => state.projects.loading);
		this.error$ = this.store.select((state) => state.projects.error);

		this.store.dispatch(ProjectActions.loadProjects());
	}
}
