import ProjectCreate from '@/components/main/ProjectCreate';
import ProjectsList from '@/components/main/ProjectsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Title from '@/components/ui/title';
import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { List, Plus } from 'lucide-react';

export default function ProjectManager() {
    return (
        <AppLayout>
            <Head title="Project Manajer" />
            <main className="space-y-6">
                <Title
                    name="Kelola Proyek Anda dengan Mudah"
                    description="Kelola, pantau, dan rapikan semua proyek Anda dengan antarmuka yang sederhana dan efisien."
                />

                <div className="border-b-2" />

                <Tabs defaultValue="projects">
                    <TabsList>
                        <TabsTrigger className="lg:px-10" value="projects">
                            <List />
                            List Projects
                        </TabsTrigger>
                        <TabsTrigger className="lg:px-10" value="createproject">
                            <Plus />
                            Tambah Project
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="projects">
                        <ProjectsList />
                    </TabsContent>
                    <TabsContent value="createproject">
                        <ProjectCreate />
                    </TabsContent>
                </Tabs>
            </main>
        </AppLayout>
    );
}
