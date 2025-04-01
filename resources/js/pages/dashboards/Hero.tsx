import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Typography from '@/components/ui/typography';
import AppLayout from '@/layouts/app-layout';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface FORM_HERO {
    [key: string]: string | number;
    id: number | string;
    title: string;
    subtitle: string;
    description: string;
}

export default function DashboardHero({ data }: { data: FORM_HERO }) {
    const { put, errors, setData, processing } = useForm<FORM_HERO>();

    //
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('hero.update', data.id), {
            onSuccess: () => alert('Berhasil Update Content Hero Section!'),
        });
    };

    return (
        <AppLayout>
            <Head title="Hero Dashboard" />

            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <div>
                    <Typography variant="h3">Update Content Hero Section</Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic, quam incidunt quae exercitationem qui.
                    </Typography>
                </div>

                <div className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="Judul">Judul</Label>
                        <Input
                            name="title"
                            placeholder="Masukan Judul Hero Section"
                            defaultValue={data.title}
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                        <InputError message={errors.title} />
                    </div>
                    <div>
                        <Label htmlFor="subtitle">Sub Judul</Label>
                        <Input
                            name="subtitle"
                            placeholder="Masukan Sub Judul Hero Section"
                            defaultValue={data.subtitle}
                            onChange={(e) => setData('subtitle', e.target.value)}
                            required
                        />
                        <InputError message={errors.subtitle} />
                    </div>
                    <div>
                        <Label htmlFor="description">Deskripsi</Label>
                        <Textarea
                            name="description"
                            placeholder="Masukan Deskripsi Hero Section"
                            defaultValue={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        <InputError message={errors.title} />
                    </div>

                    <Button disabled={processing} className="mt-6 w-full">
                        {processing ? 'Submiting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </AppLayout>
    );
}
