import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, map, take, takeUntil, timer } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { HttpResponseEntity } from 'src/app/core/domain/http-response-entity';
import { LoadingService } from 'src/app/core/services/loading.service';
import { ProjectResponseEntity, ProjectService } from 'src/app/core/services/project.service';
import { Project, ProjectsArrayType } from '../../core/domain/project';
import * as ProjectActions from '../../core/state/actions/project.actions';

@Component({
	selector: 'app-project',
	templateUrl: './project.component.html',
	styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit, OnDestroy {
	projects$: Observable<Project[]> | undefined;
	loading$!: Observable<boolean>;
	error$!: Observable<any>;

	protected projects!: ProjectsArrayType;
	protected project!: Project;
	protected page: number = 0;
	protected totalPages!: number;
	protected totalItems!: number;
	protected limit: number = 6;

	protected projectIdentity!: string;

	protected loadingIndicator: boolean = false;
	dialogVisible: boolean = false;

	private destroySubject = new Subject<void>();

	constructor(
		@Inject(Store<AppState>) private store: Store<AppState>,
		private projectService: ProjectService,
		public loadingService: LoadingService
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
		this.projectService
			.loadAll(this.page, this.limit)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
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

	showDialog(id: string) {
		this.findById(id);
		timer(500)
			.pipe(take(1))
			.subscribe(() => {
				this.dialogVisible = true;
			});
		this.dialogVisible = false;
	}

	hideDialog() {
		this.dialogVisible = false;
	}

	findById(id: string) {
		this.projectService
			.findById(id)
			.pipe(takeUntil(this.destroySubject))
			.subscribe({
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
	}

	open() {
		console.log('open dialog');
	}

	ngOnDestroy(): void {
		this.destroySubject.next();
		this.destroySubject.complete();
	}
}
