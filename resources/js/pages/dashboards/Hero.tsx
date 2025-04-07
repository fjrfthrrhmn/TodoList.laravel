import AppLayout from '@/layouts/app-layout';
import InputError from '@/components/input-error';

import Typography from '@/components/ui/typography';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FORM_HERO } from '@/types/form';
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function DashboardHero({ data }: { data: FORM_HERO }) {
    const { put, errors, setData, processing } = useForm<FORM_HERO>(); // Fungsi dari useForm dengan tipe data FORM_HERO

    // Fungsi untuk menangani submit form
    const submit: FormEventHandler = (e) => { // submit dengan tipe FormEventHandler
        e.preventDefault();

        // Mengirim data ke backend menggunakan metode PUT
        put(route('hero.update', data.id), {
            onSuccess: () => alert('Berhasil Update Content Hero Section!'),
        });
    };

    return (
        <AppLayout>
            <Head title="Hero Dashboard" />

            {/* Form untuk update data hero section */}
            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <div>
                    <Typography variant="h3">Update Content Hero Section</Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis hic, quam incidunt quae exercitationem qui.
                    </Typography>
                </div>

                <div className="flex flex-col gap-4">
                    {/* Input untuk Judul */}
                    <div>
                        <Label htmlFor="Judul">Judul</Label>
                        <Input
                            name="title"
                            placeholder="Masukan Judul Hero Section"
                            value={data.title} // Set nilai awal dari props
                            onChange={(e) => setData('title', e.target.value)} // Update state form saat input berubah
                            required
                        />
                        <InputError message={errors.title} />
                    </div>

                    {/* Input untuk Sub Judul */}
                    <div>
                        <Label htmlFor="subtitle">Sub Judul</Label>
                        <Input
                            name="subtitle"
                            placeholder="Masukan Sub Judul Hero Section"
                            value={data.subtitle}
                            onChange={(e) => setData('subtitle', e.target.value)}
                            required
                        />
                        <InputError message={errors.subtitle} />
                    </div>

                    {/* Input untuk Deskripsi */}
                    <div>
                        <Label htmlFor="description">Deskripsi</Label>
                        <Textarea
                            name="description"
                            placeholder="Masukan Deskripsi Hero Section"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        <InputError message={errors.description} />
                    </div>

                    <Button disabled={processing} className="mt-6 w-full">
                        {processing ? 'Submitting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </AppLayout>
    );
}
