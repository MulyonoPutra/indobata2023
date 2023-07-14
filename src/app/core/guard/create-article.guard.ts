import { BlogCreateComponent } from 'src/app/modules/blog/pages/blog-create/blog-create.component';
import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate {
	canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const createArticleGuard: CanDeactivateFn<BlogCreateComponent> = (
	component: BlogCreateComponent
): Observable<boolean> | boolean => {
	if (!component?.form?.dirty) {
		return confirm('are you sure you want to discard this article?');
	}
	return true;
};
