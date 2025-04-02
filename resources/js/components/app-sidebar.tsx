import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, LayoutPanelTop } from 'lucide-react';
import AppLogo from './app-logo';


const mainNavItems = [
    {
        name: 'Menu Utama',
        items: [
            {
                title: 'Dashboard',
                href: '/dashboard',
                icon: LayoutGrid,
            },
            {
                title: 'Project Manajer',
                href: '/dashboard/project',
                icon: LayoutGrid,
            },
        ] as NavItem[],
    },
    {
        name: 'Halaman Utama',
        items: [
            {
                title: 'Hero Section',
                href: '/dashboard/hero',
                icon: LayoutPanelTop,
            },
            {
                title: 'About Section',
                href: '/dashboard/about',
                icon: LayoutPanelTop,
            },
            {
                title: 'Services Section',
                href: '/dashboard/services',
                icon: LayoutPanelTop,
            },
            {
                title: 'Contact Section',
                href: '/dashboard/contact',
                icon: LayoutPanelTop,
            },
        ] as NavItem[],
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits',
        icon: BookOpen,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                {mainNavItems.map(item => (
                    <NavMain {...item} />
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
