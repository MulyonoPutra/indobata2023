import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectEffects } from './core/state/effects/project.effects';
import { projectReducer } from './core/state/reducers/project.reducer';
import { LayoutComponent } from './modules/layout/layout.component';
import { ComponentsModule } from './shared/components/components.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, LayoutComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		CoreModule,
		HttpClientModule,
    SharedModule,
		StoreModule.forRoot({ projects: projectReducer }),
		EffectsModule.forRoot([ProjectEffects]),
		StoreDevtoolsModule.instrument({}),
	],
	exports: [AppComponent, LayoutComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
