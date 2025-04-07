import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RESPONSE_TASK } from '@/types/response';
import { router, useForm } from '@inertiajs/react';
import { Save, Trash2 } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';

const CardTask = (props: RESPONSE_TASK) => {
    const { setData, put } = useForm();

    const Destroy: FormEventHandler = (e) => {
        e.preventDefault();
        if (confirm('Apakah anda yakin menghapus Task ini?')) {
            router.delete(route('task.destroy', props.id), {
                onSuccess: () => alert('Task Berhasil diHapus!'),
            });
        }
    };

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('task.changeStatus', props.id), {
            onSuccess: () => alert('Status Task Berhasil diUpdated!'),
        });
    };

    return (
        <Card>
            {/* Head */}
            <CardHeader>
                <h4 className="line-clamp-3 text-xl font-bold">{props.title}</h4>
            </CardHeader>

            {/* Body */}
            <CardContent>
                <CardDescription>{props.description}</CardDescription>
            </CardContent>

            <div className="border-b" />

            {/* Footer */}
            <CardFooter className="flex items-center justify-between gap-2">
                {/*  */}
                <form onSubmit={submit} className="flex w-full items-center gap-2">
                    <Select value={props.status} onValueChange={(e) => setData('status', e)}>
                        <SelectTrigger>
                            <SelectValue placeholder="Masukan Status Task" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key='pending' value="pending">Pending</SelectItem>
                            <SelectItem key='in_progress' value="in_progress">Progress</SelectItem>
                            <SelectItem key='completed' value="completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button>
                        <Save />
                    </Button>
                </form>

                {/*  */}
                <Button onClick={Destroy}>
                    <Trash2 />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CardTask;
