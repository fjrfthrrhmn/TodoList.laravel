import { FORM_TASK } from '@/types/form';
import { RESPONSE_PROJECT } from '@/types/response';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import InputError from '../input-error';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

const TaskFormCreate = ({ dataProject }: { dataProject: RESPONSE_PROJECT }) => {
    const { post, data, setData, processing, reset, errors } = useForm<FORM_TASK>({
        title: '',
        description: ''
    }); // Fungsi dari useForm dengan tipe data FORM_TASK

    // Fungsi untuk menangani submit form dengan tipe FormEventHandler
    const submit: FormEventHandler = (e) => { 
        e.preventDefault();
        console.log(data);

        // Mengirim data ke backend menggunakan metode post
        post(route('task.store', dataProject.id), {
            onFinish: () => reset(),
            onError: (e) => console.log(e),
            onSuccess: () => alert('Berhasil Menambahkan Task!'),
        });
    };

    return (
        // Form untuk membuat Task baru
        <form className="max-w-xl space-y-4 py-4" onSubmit={submit}>
            <div className="flex flex-col gap-2">
                {/* Input untuk Judul */}
                <div>
                    <Label htmlFor="title">Judul</Label>
                    <Input
                        name="title"
                        value={data.title}
                        placeholder="Masukan Judul Task"
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />
                    <InputError message={errors.title} />
                </div>

                {/* Input untuk Deskripsi */}
                <div>
                    <Label htmlFor="description">Deskripsi</Label>
                    <Textarea
                        value={data.description}
                        name="description"
                        placeholder="Masukan Deskripsi Task"
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />
                    <InputError message={errors.description} />
                </div>

                <Button disabled={processing} className="mt-6 w-full">
                    {processing ? 'Submiting...' : 'Submit'}
                </Button>
            </div>
        </form>
    );
};

export { TaskFormCreate };
