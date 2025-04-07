import ProjectDetail from '@/components/main/ProjectDetail';
import { ProjectFormUpdate } from '@/components/main/ProjectForm';
import { TaskFormCreate } from '@/components/main/TaskForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { RESPONSE_PROJECT } from '@/types/response';
import { Head } from '@inertiajs/react';


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
            <Head title="Detail Project"   />

            <Tabs defaultValue="detail">
                <TabsList>
                    <TabsTrigger className="lg:px-10" value="detail">
                        Detail
                    </TabsTrigger>
                    <TabsTrigger className="lg:px-10" value="updateproject">
                        Edit Project
                    </TabsTrigger>
                    <TabsTrigger className="lg:px-10" value="createtask">
                        Tambah Tugas
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="detail">
                    <ProjectDetail {...project} />
                </TabsContent>
                <TabsContent value="updateproject">
                    <ProjectFormUpdate dataDefault={project} />
                </TabsContent>
                <TabsContent value="createtask">
                    <TaskFormCreate dataProject={project} />
                </TabsContent>
            </Tabs>
        </AppLayout>
    );
}
