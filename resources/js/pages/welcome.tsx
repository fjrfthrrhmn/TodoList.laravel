import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import Typography from '@/components/ui/typography';
import { SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="TodoList" />
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex max-w-xl flex-col items-center justify-center gap-4 text-center">
                    <Icon iconNode={Sparkles} />

                    <Typography variant="h1" className="max-w-md">
                        Catat, Lakukan dan Selesaikan!
                    </Typography>
                    <Typography variant="p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque ipsam cum soluta inventore saepe est delectus obcaecati
                        iste. Debitis.
                    </Typography>
                </div>

                <div className="mt-6 flex items-center gap-2">
                    {auth.user ? (
                        <>
                            <Link method="post" href={route('logout')}>
                                <Button variant="outline" className="text-red-500 hover:text-red-400">
                                    Logout
                                </Button>
                            </Link>
                            <Link href={route('dashboard')}>
                                <Button>
                                    Lets Gow <ChevronRight />
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href={route('register')}>
                                <Button variant="outline">Sign Up</Button>
                            </Link>
                            <Link href={route('login')}>
                                <Button>
                                    Sign In <ChevronRight />
                                </Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
