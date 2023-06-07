import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProjectService } from '../../services/project.service';
import * as ProjectActions from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
	constructor(
		private actions$: Actions,
		private projectService: ProjectService
	) {}

	loadProjects$ = createEffect(() =>
		this.actions$.pipe(
			ofType(ProjectActions.loadProjects),
			mergeMap(() =>
				this.projectService.getProjects().pipe(
					map((projects) =>
						ProjectActions.loadProjectsSuccess({ projects })
					),
					catchError((error) =>
						of(ProjectActions.loadProjectsFailure({ error }))
					)
				)
			)
		)
	);
}
