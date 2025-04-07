import { ProjectFormCreate } from '@/components/main/ProjectForm';
import ProjectsList from '@/components/main/ProjectsList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Title from '@/components/ui/title';
import AppLayout from '@/layouts/app-layout';
import { RESPONSE_PROJECT } from '@/types/response';
import { Head } from '@inertiajs/react';
import { List, Plus, Trash2 } from 'lucide-react';

export default function ProjectManagerPage({ projects }: { projects: RESPONSE_PROJECT[] }) {
    return (
        <AppLayout>
            <Head title="Project Manajer" />

            <main className="space-y-6">
                {/* Head */}
                <Title
                    name="Kelola Proyek Anda dengan Mudah"
                    description="Kelola, pantau, dan rapikan semua proyek Anda dengan antarmuka yang sederhana dan efisien."
                />

                <div className="border-b-2" />

                {/* Body */}
                <Tabs defaultValue="projects">
                    <TabsList>
                        {/* Tab untuk melihat daftar proyek */}
                        <TabsTrigger className="flex items-center gap-2 lg:px-10" value="projects">
                            <List />
                            List Projects
                        </TabsTrigger>

                        {/* Tab untuk membuka form penambahan proyek baru */}
                        <TabsTrigger className="flex items-center gap-2 lg:px-10" value="createproject">
                            <Plus />
                            Tambah Project
                        </TabsTrigger>

                        {/* Tab untuk melihat proyek yang dihapus (dalam sampah) */}
                        <TabsTrigger className="flex items-center gap-2 lg:px-10" value="trashproject">
                            <Trash2 />
                            Sampah Project
                        </TabsTrigger>
                    </TabsList>

                    {/* Konten untuk tab "List Projects" */}
                    <TabsContent value="projects">
                        <ProjectsList data={projects} />
                    </TabsContent>

                    {/* Konten untuk tab "Tambah Project" */}
                    <TabsContent value="createproject">
                        <ProjectFormCreate />
                    </TabsContent>

                    {/* Konten untuk tab "Sampah Projects" */}
                    <TabsContent value="trashproject">Fitur Belum Tersedia.</TabsContent>
                </Tabs>
            </main>
        </AppLayout>
    );
}
