const TaskForm = props => {
    return (
        <form>
            <input 
                name='task'
                type='text'
                placeholder='enter a task' 
                onChange={props.inputChangeHandler}/> 
                {/* this has lots of small updates for each character typed. inefficient? */}
            <input 
                name='duration'
                type='number'
                step='0.1' //fractional hours okay 
                placeholder='how many hours will this take?' 
                onChange={props.inputChangeHandler}/>
            <br/><br/>
            <button onClick={props.addTask}>Add an activity</button>
            <button onClick={props.shuffleTasks}>Shuffle the order of tasks</button>
            <button onClick={props.prioritizeTasks}>Prioritize tasks</button>
        </form>
    )
}

export default TaskForm;