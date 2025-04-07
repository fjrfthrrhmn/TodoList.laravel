import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { FORM_PROJECT } from '@/types/form';
import { RESPONSE_PROJECT } from '@/types/response';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import InputError from '../input-error';

const ProjectFormCreate = () => {
    const { post, data, setData, processing, reset, errors } = useForm<FORM_PROJECT>({
        // Fungsi dari useForm dengan tipe data FORM_PROJECT
        title: '',
        deadline: '',
        description: '',
        icon: '',
        priority: '',
    });

    // Fungsi untuk menangani submit form dengan tipe FormEventHandler
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);

        // Mengirim data ke backend menggunakan metode post
        post(route('project.store'), {
            onFinish: () => reset(),
            onError: (e) => {
                reset();
                console.log(e);
            },
            onSuccess: () => {
                alert('Berhasil Menambahkan Project!');
                reset();
            },
        });
    };

    return (
        // Form untuk membuat Project Baru
        <form className="max-w-xl space-y-4 py-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                {/* Input untuk Judul */}
                <div>
                    <Label htmlFor="title">Judul</Label>
                    <Input
                        name="title"
                        value={data.title}
                        placeholder="Masukan Judul Project"
                        onChange={(e) => setData('title', e.target.value)}
                        maxLength={225}
                        required
                    />
                    <InputError message={errors.title} />
                </div>

                {/* Input untuk Icon */}
                <div>
                    <Label htmlFor="icon">Icon</Label>
                    <Input
                        name="icon"
                        value={data.icon}
                        placeholder="Masukan Icon Project - default 📝"
                        onChange={(e) => setData('icon', e.target.value)}
                        maxLength={2}
                    />
                    <InputError message={errors.icon} />
                </div>

                {/* Input untuk Deskripsi */}
                <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                        name="description"
                        value={data.description}
                        placeholder="Masukan Deskripsi Project"
                        onChange={(e) => setData('description', e.target.value)}
                        maxLength={225}
                        required
                    />
                    <InputError message={errors.description} />
                </div>

                {/* Input untuk Prioritas */}
                <div>
                    <Label htmlFor="priority">Prioritas</Label>
                    <Select name="priority" value={data.priority} onValueChange={(e) => setData('priority', e)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Masukan Prioritas Project - default Sedang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="low">Rendah</SelectItem>
                            <SelectItem value="medium">Sedang</SelectItem>
                            <SelectItem value="high">Tinggi</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.priority} />
                </div>

                {/* Input untuk Deadline */}
                <div>
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input name="deadline" value={data.deadline} type="date" onChange={(e) => setData('deadline', e.target.value)} required />
                    <InputError message={errors.deadline} />
                </div>

                <Button disabled={processing} className="mt-6 w-full">
                    {processing ? 'Submiting...' : 'Submit'}
                </Button>
            </div>
        </form>
    );
};

const ProjectFormUpdate = ({ dataDefault }: { dataDefault: RESPONSE_PROJECT }) => {
    const { put, data, setData, processing, reset, errors } = useForm<FORM_PROJECT>({
        // Fungsi dari useForm dengan tipe data FORM_PROJECT
        title: dataDefault.title,
        deadline: dataDefault.deadline,
        description: dataDefault.description,
        icon: dataDefault.icon,
        priority: dataDefault.priority,
    });

    // Fungsi untuk menangani submit form dengan tipe FormEventHandler
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);

        // Mengirim data ke backend menggunakan metode put
        put(route('project.update', dataDefault.id), {
            onFinish: () => reset(),
            onError: (e) => console.log(e),
            onSuccess: () => {
                alert('Berhasil Menupdate Project!');
                window.location.reload();
            },
        });
    };

    return (
        // Form untuk menupdate Project Baru
        <form className="max-w-xl space-y-4 py-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                {/* Input untuk Title */}
                <div>
                    <Label htmlFor="title">Judul</Label>
                    <Input
                        name="title"
                        value={data.title}
                        placeholder="Masukan Judul Project"
                        onChange={(e) => setData('title', e.target.value)}
                        maxLength={225}
                        required
                    />
                    <InputError message={errors.title} />
                </div>

                {/* Input untuk Icon */}
                <div>
                    <Label htmlFor="icon">Icon</Label>
                    <Input
                        name="icon"
                        value={data.icon}
                        placeholder="Masukan Icon Project - default 📝"
                        onChange={(e) => setData('icon', e.target.value)}
                        maxLength={225}
                    />
                    <InputError message={errors.icon} />
                </div>

                {/* Input untuk Deskripsi */}
                <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                        value={data.description}
                        name="description"
                        placeholder="Masukan Deskripsi Project"
                        onChange={(e) => setData('description', e.target.value)}
                        maxLength={225}
                        required
                    />
                    <InputError message={errors.description} />
                </div>

                {/* Input untuk Prioritas */}
                <div>
                    <Label htmlFor="priority">Prioritas</Label>
                    <Select name="priority" value={data.priority} onValueChange={(e) => setData('priority', e)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Masukan Prioritas Project - default Sedang" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="low">Rendah</SelectItem>
                            <SelectItem value="medium">Sedang</SelectItem>
                            <SelectItem value="high">Tinggi</SelectItem>
                        </SelectContent>
                    </Select>
                    <InputError message={errors.priority} />
                </div>

                {/* Input untuk Deadline */}
                <div>
                    <Label htmlFor="deadline">Deadline</Label>
                    <Input name="deadline" type="date" value={data.deadline} onChange={(e) => setData('deadline', e.target.value)} required />
                    <InputError message={errors.deadline} />
                </div>

                <Button disabled={processing} className="mt-6 w-full">
                    {processing ? 'Submiting...' : 'Submit'}
                </Button>
            </div>
        </form>
    );
};

export { ProjectFormCreate, ProjectFormUpdate };
