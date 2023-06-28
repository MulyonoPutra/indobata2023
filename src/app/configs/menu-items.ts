export interface MenuItem {
	id: string;
	title: string;
	route: string;
}

export const MenuItems: MenuItem[] = [
	{ id: '1', title: 'Home', route: '/' },
	{ id: '2', title: 'About', route: 'about' },
	{ id: '3', title: 'Projects', route: 'project' },
	{ id: '4', title: 'Products', route: 'product' },
	{ id: '5', title: 'Blog', route: 'blog' },
	{ id: '6', title: 'Contact', route: 'contact' },
];
