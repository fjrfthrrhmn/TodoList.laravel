import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

interface FORM_PROJECT {
    [key: string]: string;
    title: string;
    description: string;
    icon: string;
    priority: string;
    deadline: string;
}

const ProjectCreate = () => {
    const { post, data, setData, processing, reset } = useForm<FORM_PROJECT>({
        title: '',
        deadline: '',
        description:
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec,.',
        icon: '📝',
        priority: 'medium',
    });

    //
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('project.store'), {
            onFinish: () => reset(),
            onError: (e) => console.log(e),
            onSuccess: () => alert('Berhasil Menambahkan Project!'),
        });
    };

    return (
        <div className="py-4">
            <form className="max-w-xl space-y-4" onSubmit={submit}>
                <div className="flex flex-col gap-2">
                    <div>
                        <Label htmlFor="title">Judul</Label>
                        <Input
                            name="title"
                            value={data.title}
                            placeholder="Masukan Judul Project"
                            onChange={(e) => setData('title', e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="icon">Icon</Label>
                        <Input
                            name="icon"
                            value={data.icon}
                            placeholder="Masukan Icon Project - default 📝"
                            onChange={(e) => setData('icon', e.target.value)}
                            maxLength={2}
                        />
                    </div>
                    <div>
                        <Label htmlFor="description">Deskripsi</Label>
                        <Textarea
                            value={data.description}
                            name="description"
                            placeholder="Masukan Deskripsi Project"
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                    </div>
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
                                <SelectItem value="urgent">Sangat Urgent</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="deadline">Deadline</Label>
                        <Input name="deadline" type="date" value={data.deadline} onChange={(e) => setData('deadline', e.target.value)} required />
                    </div>

                    <Button disabled={processing} className="mt-6 w-full">
                        {processing ? 'Submiting...' : 'Submit'}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ProjectCreate;
