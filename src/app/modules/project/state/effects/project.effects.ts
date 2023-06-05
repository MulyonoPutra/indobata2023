import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError, of } from "rxjs";
import * as ProjectActions from '../actions/project.actions';
import { ProjectService } from "../../services/project.service";

@Injectable()
export class ProjectEffects {

  constructor(private actions$: Actions, private projectService: ProjectService) {}

  loadProjects$ = createEffect(() =>
  this.actions$.pipe(
    ofType(ProjectActions.loadProjects),
    mergeMap(() =>
      this.projectService.getProjects().pipe(
        map((projects) => ProjectActions.loadProjectsSuccess({ projects })),
        catchError((error) => of(ProjectActions.loadProjectsFailure({ error })))
      )
    )
  )
);
}
