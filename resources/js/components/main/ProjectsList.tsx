import { RESPONSE_PROJECT } from '@/types/response';
import Typography from '../ui/typography';
import CardProject from './CardProject';

const ProjectsList = ({ data }: { data: RESPONSE_PROJECT[] }) => {
    const ProjectsSection = [
        {
            label: 'Rendah',
            color: 'border-green-300',
            items: data.filter((e) => e.priority === 'low') || [],
        },
        {
            label: 'Sedang',
            color: 'border-yellow-300',
            items: data.filter((e) => e.priority === 'medium') || [],
        },
        {
            label: 'Tinggi',
            color: 'border-orange-300',
            items: data.filter((e) => e.priority === 'high') || [],
        },
    ];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 py-4">
            {ProjectsSection.map((item) => (
                <div>
                    <div className={`border-b-4 ${item.color} mb-4 pb-2`}>
                        <Typography variant="h3">{item.label}</Typography>
                    </div>

                    <div className='space-y-4'>{item.items.length > 0 ? item.items.map((props: RESPONSE_PROJECT) => <CardProject {...props} />): 'Tidak ada Project ditemukan.'}</div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsList;
