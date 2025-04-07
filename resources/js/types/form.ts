// struktur
interface FORM_HERO {
    [key: string]: string | number; // index signature
    id: number | string;
    title: string;
    subtitle: string;
    description: string;
}

interface FORM_PROJECT {
    [key: string]: string;
    title: string;
    description: string;
    icon: string;
    priority: string;
    deadline: string;
}

interface FORM_TASK {
    [key: string]: string;
    title: string;
    description: string;
}

export { type FORM_HERO, type FORM_PROJECT, type FORM_TASK };
