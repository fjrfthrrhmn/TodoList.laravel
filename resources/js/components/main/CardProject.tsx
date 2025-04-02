import { RESPONSE_PROJECT } from '@/types';
import { Link, router } from '@inertiajs/react';
import { CalendarClock, Trash2 } from 'lucide-react';
import { FormEventHandler } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '../ui/card';

const CardProject = (props: RESPONSE_PROJECT) => {
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (confirm('Apakah anda yakin menghapus Project ini?')) {
            router.delete(route('project.destroy', props.id), {
                onSuccess: () => alert('Project Berhasil diHapus!'),
            });
        }
    };
    return (
        <Card>
            <Link href="#">
                <CardHeader>
                    <span className="text-2xl">{props.icon}</span>
                    <h4 className="line-clamp-3 text-xl font-bold">{props.title}</h4>
                </CardHeader>
            </Link>
            <CardContent>
                <CardDescription>{props.description}</CardDescription>
            </CardContent>
            <div className="border-b" />
            <CardFooter className="flex items-center justify-between">
                <small className="flex gap-2">
                    <CalendarClock size="18" />
                    {props.formated_deadline}
                </small>
                <Button onClick={submit}>
                    <Trash2 />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default CardProject;
