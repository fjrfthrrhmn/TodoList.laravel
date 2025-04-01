import { Button } from '@/components/ui/button';
import Typography from '@/components/ui/typography';
// import { type SharedData } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ChevronRight } from 'lucide-react';

export default function Welcome() {
    // const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="TodoList" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex max-w-xl flex-col items-center justify-center gap-2 text-center">
                    <Typography variant="h2">
                        Selamat Datang. <br />
                        Kelola To-Do List dengan Mudah!
                    </Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque ipsam cum soluta inventore saepe est delectus obcaecati
                        iste. Debitis.
                    </Typography>
                </div>

                <div className="mt-6 flex items-center gap-2">
                    <Link href={route('register')}>
                        <Button variant="outline">Sign Up</Button>
                    </Link>
                    <Link href={route('login')}>
                        <Button>
                            Sign In <ChevronRight />
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
