const Task = props => {
    return (
        <div>
            <p>{props.task.task} {props.task.duration}</p>
        </div>
    )
}

export default Task;