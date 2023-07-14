import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guard/auth.guard';
import { LayoutComponent } from './modules/layout/layout.component';
import { NgModule } from '@angular/core';
import { createArticleGuard } from './core/guard/create-article.guard';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./modules/authentication/login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'register',
		loadChildren: () => import('./modules/authentication/register/register.module').then((m) => m.RegisterModule),
	},
	{
		path: '',
		component: LayoutComponent,
		children: [
			{
				path: '',
				loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
			},
			{
				path: 'contact',
				loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
			},
			{
				path: 'about',
				loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
			},
			{
				path: 'product',
				loadChildren: () =>
					import('./modules/product/pages/product-list/product.module').then((m) => m.ProductModule),
			},
			{
				path: 'product-detail/:id',
				loadChildren: () =>
					import('./modules/product/pages/product-detail/product-detail.module').then(
						(m) => m.ProductDetailModule
					),
			},
			{
				path: 'project',
				loadChildren: () => import('./modules/project/project.module').then((m) => m.ProjectModule),
			},
			{
				path: 'blog',
				loadChildren: () => import('./modules/blog/pages/blog-list/blog.module').then((m) => m.BlogModule),
			},
			{
				path: 'blog-detail/:id',
				loadChildren: () =>
					import('./modules/blog/pages/blog-detail/blog-detail.module').then((m) => m.BlogDetailModule),
			},
			{
				path: 'blog-create',
				loadChildren: () =>
					import('./modules/blog/pages/blog-create/blog-create.module').then((m) => m.BlogCreateModule),
				canActivate: [AuthGuard],
				canDeactivate: [createArticleGuard],
			},
			{
				path: 'profile',
				loadChildren: () =>
					import('./modules/profile/profile-view/profile.module').then((m) => m.ProfileModule),
				canActivate: [AuthGuard],
			},
			{
				path: 'profile-update/:id',
				loadChildren: () =>
					import('./modules/profile/profile-update/profile-update.module').then((m) => m.ProfileUpdateModule),
				canActivate: [AuthGuard],
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
