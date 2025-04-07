interface RESPONSE_PROJECT {
    id: number;
    title: string;
    description: string;
    deadline: string;
    status: 'pending' | 'in_progress' | 'completed' | 'review';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    icon: string;
    formated_deadline: string;
    visibility: 'private' | 'public';
    created_at: string;
    tasks?: RESPONSE_TASK[] | [];
}

interface RESPONSE_TASK {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed' | 'review';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    icon: string;
    visibility: 'private' | 'public';
}

export { type RESPONSE_PROJECT, type RESPONSE_TASK };
