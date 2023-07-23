import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from './shared/components/components.module';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';
import { LayoutComponent } from './modules/layout/layout.component';
import { MessageService } from 'primeng/api';
import { PrimeNgModule } from './shared/config/primeng.module';
import { ProjectEffects } from './core/state/effects/project.effects';
import { SharedModule } from './shared/shared.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { projectReducer } from './core/state/reducers/project.reducer';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}
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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
	],
	exports: [AppComponent, LayoutComponent],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	providers: [MessageService],
})
export class AppModule {}
