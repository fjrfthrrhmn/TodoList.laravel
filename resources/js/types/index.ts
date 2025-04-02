interface RESPONSE_PROJECT {
    id: number;
    title: string;
    description: string;
    status: 'pending' | 'in_progress' | 'completed' | 'review';
    priority: 'low' | 'medium' | 'high' | 'urgent';
    icon: string;
    formated_deadline: string
}

export { type RESPONSE_PROJECT };
