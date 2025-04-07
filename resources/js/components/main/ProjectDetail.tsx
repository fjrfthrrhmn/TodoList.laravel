import { ColorsPriority } from '@/lib/utils';
import { RESPONSE_PROJECT } from '@/types/response';
import { CalendarClock, CloudAlert, Eye } from 'lucide-react';
import Typography from '../ui/typography';
import TasksList from './TasksList';

const ProjectDetail = (props: RESPONSE_PROJECT) => {
    return (
        <>
            <main className="space-y-4">
                {/* Head */}
                <div className="max-w-2xl space-y-2.5">
                    <div className="text-4xl">{props.icon}</div>
                    <Typography variant="h2">{props.title}</Typography>
                    <Typography variant="p">{props.description}</Typography>
                </div>

                <div className="border-b-2" />

                {/* Body */}
                <div className="flex items-center gap-6">
                    <small
                        className={`flex max-w-max items-center gap-2 rounded-sm px-4 py-1 text-sm font-bold capitalize ${ColorsPriority(props.priority)}`}
                    >
                        <CloudAlert size={18} />
                        {props.priority}
                    </small>

                    <div className="h-6 border" />

                    <small className="flex items-center gap-2 font-medium capitalize">
                        <Eye size={18} />
                        {props.visibility}
                    </small>

                    <div className="h-6 border" />

                    <small className="flex items-center gap-2 font-medium capitalize">
                        <CalendarClock size={18} />
                        {props.formated_deadline}
                    </small>
                </div>
            </main>

            {/* List Tasks */}
            <TasksList data={props.tasks || []} />
        </>
    );
};

export default ProjectDetail;
