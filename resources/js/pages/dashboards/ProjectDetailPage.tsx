import ProjectDetail from '@/components/main/ProjectDetail';
import { ProjectFormUpdate } from '@/components/main/ProjectForm';
import { TaskFormCreate } from '@/components/main/TaskForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { RESPONSE_PROJECT } from '@/types/response';
import { Head } from '@inertiajs/react';
import { FolderOpen, FolderPen, Plus } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'List Projects',
        href: '/dashboard/projects',
    },
    {
        title: 'Detail Project',
        href: '#',
    },
];

export default function ProjectDetailPage({ project }: { project: RESPONSE_PROJECT }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Detail Project" />

            {/* Body */}
            <Tabs defaultValue="detail">
                <TabsList>
                    <TabsTrigger className="flex items-center gap-2 lg:px-10" value="detail">
                        <FolderOpen />
                        Informasi
                    </TabsTrigger>

                    <TabsTrigger className="flex items-center gap-2 lg:px-10" value="updateproject">
                        <FolderPen />
                        Edit Project
                    </TabsTrigger>

                    <TabsTrigger className="flex items-center gap-2 lg:px-10" value="createtask">
                        <Plus />
                        Tambah Tugas
                    </TabsTrigger>
                </TabsList>

                {/* Konten dari tab "Detail" */}
                <TabsContent value="detail">
                    <ProjectDetail {...project} /> {/* Menggunakan spread operator */}
                </TabsContent>

                {/* Konten dari tab "Edit Project" */}
                <TabsContent value="updateproject">
                    <ProjectFormUpdate dataDefault={project} />
                </TabsContent>

                {/* Konten dari tab "Tambah Tugas" */}
                <TabsContent value="createtask">
                    <TaskFormCreate dataProject={project} />
                </TabsContent>
            </Tabs>
        </AppLayout>
    );
}
