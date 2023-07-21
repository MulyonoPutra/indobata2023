export interface MenuItem {
	id: string;
	title: string;
	route: string;
}

export const headerItems: MenuItem[] = [
	{ id: '1', title: 'Home', route: '/' },
	{ id: '2', title: 'About', route: 'about' },
	{ id: '3', title: 'Projects', route: 'project' },
	{ id: '4', title: 'Products', route: 'product' },
	{ id: '5', title: 'Articles', route: 'blog' },
	{ id: '6', title: 'Contact', route: 'contact' },
];

export const dropdownProfileItems: MenuItem[] = [
	{ id: '1', title: 'Profile', route: 'profile' },
	{ id: '2', title: 'Create Article', route: 'blog-create' },
	{ id: '3', title: 'My Article', route: 'my-articles' },
];

export const countries = [
	{ code: 'en', name: 'English' },
	{ code: 'id', name: 'Indonesia' },
];
