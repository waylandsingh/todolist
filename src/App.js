import React, { Component } from 'react'
import './App.css';

import TaskForm from './TaskComponents/TaskForm'
import TaskList from './TaskComponents/Tasklist'


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks: [],
      task: ''
    }
  }

  inputChangeHandler = event => {
    this.setState({[event.target.name]:event.target.value})
  }

  addTask = event => {
    event.preventDefault();
    let newTask = {
      task: this.state.task,
      duration: this.state.duration,
      id: Date.now(),
    };
    // add set the state to include the new Task
    this.setState({
      tasks: [...this.state.tasks, newTask],
      task:''
    })
  }

  //Note: random returns 0-.999999... so with floor, it's always <=i
  shuffleArray = arr => {
    var swap, i, j;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1)) // pick a random number between 0 and i 
      swap = arr[i];
      arr[i] = arr[j]
      arr[j] = swap;
    }

    return arr;
  }

  shuffleTasks = event => {
    event.preventDefault();
    this.setState({
      tasks: [...this.shuffleArray(this.state.tasks)],
      task:''
    })
  }

  taskWeight(a, b) {
    // task parameters include duration, priority, uniqueid, task(name),
    return parseFloat(a.duration) - parseFloat(b.duration)
  };

  // use some criteria to sort the priority of the day's events
  prioritizeByWeight = arr => {
    arr.sort(this.taskWeight) // can wrap taskWeight into a callback function to streamline

    return arr;
  }

  prioritizeTasks = event => {
    event.preventDefault();
    this.setState({
      tasks: [...this.prioritizeByWeight(this.state.tasks)],
      task:''
    })
  }


  render() {
    console.log(this.state)
    return (
      <div className="App">
          <h1>Activity Planner</h1>
          <TaskList tasks={this.state.tasks}/>
          <TaskForm 
          tasks={this.state.tasks}
          value = {this.state.task}
          inputChangeHandler={this.inputChangeHandler}
          addTask={this.addTask}
          shuffleTasks={this.shuffleTasks}
          prioritizeTasks={this.prioritizeTasks}/>

      </div>
    );
  }
}

export default App;
