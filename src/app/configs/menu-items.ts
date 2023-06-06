export interface MenuItem {
	title: string;
	route: string;
}

export const MenuItems: MenuItem[] = [
	{ title: 'Home', route: '/' },
	{ title: 'About', route: 'about' },
	{ title: 'Projects', route: 'project' },
	{ title: 'Products', route: 'product' },
	{ title: 'Blog', route: 'blog' },
	{ title: 'Contact', route: 'contact' },
];
