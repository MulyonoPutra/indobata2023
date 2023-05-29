export interface MenuItem {
    title: string
    route: string
}

export const MenuItems: MenuItem[] = [
    { title: 'Home', route: 'home' },
    { title: 'About', route: 'about' },
    { title: 'Projects', route: 'projects' },
    { title: 'Products', route: 'products' },
    { title: 'Blog', route: 'blog' },
    { title: 'Contact', route: 'contact' }
]
