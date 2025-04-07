import { RESPONSE_TASK } from '@/types/response';
import Typography from '../ui/typography';
import CardTask from './CardTask';

const TasksList = ({ data }: { data: RESPONSE_TASK[] }) => {
    const ProjectsSection = [
        {
            label: 'Pending',
            color: 'border-orange-300',
            items: data.filter((e) => e.status === 'pending') || [],
        },
        {
            label: 'Progress',
            color: 'border-blue-300',
            items: data.filter((e) => e.status === 'in_progress') || [],
        },
        {
            label: 'Completed',
            color: 'border-green-300',
            items: data.filter((e) => e.status === 'completed') || [],
        },
    ];

    return (
        <div className="my-4 grid grid-cols-1 gap-4 py-4 lg:grid-cols-3">
            {ProjectsSection.map((item) => (
                <div key={item.label}>
                    <div className={`border-b-4 ${item.color} mb-4 pb-2`}>
                        <Typography variant="h3">{item.label}</Typography>
                    </div>

                    <div className="space-y-4">
                        {item.items.length > 0 ? item.items.map((props: RESPONSE_TASK) => <CardTask key={props.id} {...props} />) : 'Tidak ada Task Ditemukan.'}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TasksList;
