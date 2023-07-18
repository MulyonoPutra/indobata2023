import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyArticlesComponent } from './my-articles.component';

const routes: Routes = [{ path: '', component: MyArticlesComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MyArticlesRoutingModule {}
