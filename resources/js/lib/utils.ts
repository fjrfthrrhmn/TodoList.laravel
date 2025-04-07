import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function ColorsPriority(props: 'low' | 'medium' | 'high' | 'urgent'){
    switch (props) {
        case 'low':
            return 'bg-green-500/20 text-green-500'

        case 'medium':
            return 'bg-blue-500/20 text-blue-500'
        
        case 'high':
            return 'bg-orange-500/20 text-orange-500'

        case 'urgent':
            return 'bg-red-500/20 text-red-500'
    }
}