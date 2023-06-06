import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './modules/layout/layout.component';
import { ProjectEffects } from './modules/project/state/effects/project.effects';
import { projectReducer } from './modules/project/state/reducers/project.reducer';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
	declarations: [AppComponent, LayoutComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		HttpClientModule,
		StoreModule.forRoot({ projects: projectReducer }),
		EffectsModule.forRoot([ProjectEffects]),
		StoreDevtoolsModule.instrument({}),
	],
	exports: [AppComponent, LayoutComponent],
	providers: [],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
