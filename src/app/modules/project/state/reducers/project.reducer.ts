import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Project } from '../../models/project';
import * as ProjectActions from '../actions/project.actions';

export interface ProjectState extends EntityState<Project> {
  loading: boolean;
  error: any;
}

export const projectAdapter = createEntityAdapter<Project>();

const initialState: ProjectState = projectAdapter.getInitialState({
  loading: false,
  error: null,
});

export const projectReducer = createReducer(
  initialState,
  on(ProjectActions.loadProjects, (state) => ({ ...state, loading: true })),
  on(ProjectActions.loadProjectsSuccess, (state, { projects }) =>
    projectAdapter.setAll(projects, { ...state, loading: false })
  ),
  on(ProjectActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);

export function reducer(state: ProjectState, action: Action) {
  return projectReducer(state, action);
}
