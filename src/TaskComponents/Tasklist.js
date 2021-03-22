import Task from './Tasks';

const TaskList = props => {
    return (
        <div>
            Taskname    Time(hrs)
            {/* return one Task element for each item in tasks */}
            {props.tasks.map((task, id) => (
                <Task 
                    task={task}
                    key={id}/>
            ))}
            
        </div>
    )
}

export default TaskList