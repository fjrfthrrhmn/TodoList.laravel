import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, ChartSpline, FileClock, Folder, Folders, Info, LayoutGrid, PanelsTopLeft, Settings } from 'lucide-react';
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
                title: 'Analisis',
                href: '#',
                icon: ChartSpline,
            },
            {
                title: 'Informasi',
                href: '#',
                icon: Info,
            },
            {
                title: 'Pengaturan',
                href: '#',
                icon: Settings,
            },
        ] as NavItem[],
    },
    {
        name: 'Manajemen',
        items: [
            {
                title: 'Project Manajer',
                href: '/dashboard/projects',
                icon: Folders,
            },
            {
                title: 'Pages',
                href: '#',
                icon: PanelsTopLeft,
            },
        ],
    },
    {
        name: 'Notifikasi',
        items: [
            {
                title: 'Aktifitas Terbaru',
                href: '#',
                icon: FileClock,
            },
            {
                title: 'Pembaruan Sistem',
                href: '#',
                icon: PanelsTopLeft,
            },
        ],
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
                {mainNavItems.map((item) => (
                    <NavMain key={item.name} {...item} />
                ))}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
