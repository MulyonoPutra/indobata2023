import { createAction, props } from '@ngrx/store';
import { Project } from '../../models/project';

export const loadProjects = createAction('[Project] Load Projects');
export const loadProjectById = createAction(
	'[Project] Get Project by ID',
	props<{ id: number }>()
);
export const loadProjectsSuccess = createAction(
	'[Project] Load Projects Success',
	props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
	'[Project] Load Projects Failure',
	props<{ error: any }>()
);
