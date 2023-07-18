import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProjectEffects } from './core/state/effects/project.effects';
import { projectReducer } from './core/state/reducers/project.reducer';
import { LayoutComponent } from './modules/layout/layout.component';
import { ComponentsModule } from './shared/components/components.module';
import { PrimeNgModule } from './shared/config/primeng.module';
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
		BrowserAnimationsModule,
		PrimeNgModule,
	],
	exports: [AppComponent, LayoutComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [MessageService],
})
export class AppModule {}
