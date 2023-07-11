import { Dialog } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map, take, timer } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ProjectResponseEntity, ProjectService } from 'src/app/core/services/project.service';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Project, ProjectsArrayType } from '../../core/domain/project';
import * as ProjectActions from '../../core/state/actions/project.actions';
import { ProjectDetailDialogComponent } from './components/project-detail-dialog/project-detail-dialog.component';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
	projects$: Observable<Project[]> | undefined;
	loading$!: Observable<boolean>;
	error$!: Observable<any>;

	protected projects!: ProjectsArrayType;
	protected project!: Project;
	protected page: number = 0;
	protected totalPages!: number;
	protected totalItems!: number;
	protected limit: number = 6;

	protected loadingIndicator: boolean = false;

	constructor(
		@Inject(Store<AppState>) private store: Store<AppState>,
		private projectService: ProjectService,
		public loadingService: LoadingService,
		public dialog: Dialog
	) {}

	ngOnInit(): void {
		this.loadAll();
		// this.loadProjects();
	}

	// load all the projects usng ngrx and mock data
	private loadProjects() {
		this.projects$ = this.store
			.select((state) => Object.values(state.projects.entities))
			.pipe(map((projectsArray: any) => projectsArray));
		this.loading$ = this.store.select((state) => state.projects.loading);
		this.error$ = this.store.select((state) => state.projects.error);

		this.store.dispatch(ProjectActions.loadProjects());
	}

	loadAll() {
		this.projectService.loadAll(this.page, this.limit).subscribe({
			next: (response: ProjectResponseEntity) => {
				this.projects = response.data;
				this.totalPages = response.paging.totalPages!;
				this.totalItems = response.paging.total!;
			},
			error: (error) => {
				console.log(error);
			},
		});
	}

	findById(id: string) {
		this.projectService.findById(id).subscribe({
			next: (response: HttpResponseEntity<Project>) => {
				this.project = response.data;
			},
			error: (error) => {
				console.log(error);
			},
		});
	}

	protected onPageChanged(page: number): void {
		this.page = page;
		this.loadAll();
	}

	openDialog(id: string | undefined): void {
		if (id) {
			this.findById(id);
		}

		timer(400)
			.pipe(take(1))
			.subscribe(() => {
				this.dialog.open<string>(ProjectDetailDialogComponent, {
					data: this.project,
				});
			});
	}
}
