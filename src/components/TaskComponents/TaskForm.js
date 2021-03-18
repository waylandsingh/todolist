const TaskForm = props => {
    return (
        <form>
            <input 
                name='task'
                type='text'
                placeholder='enter a task' />
            <button>Add an activity</button>
        </form>
    )
}

export default TaskForm;