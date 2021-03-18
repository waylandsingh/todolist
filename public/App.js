import React, { Component } from 'react';
import TaskForm from '../src/components/TaskComponents/TaskForm'
import TaskList from '../src/components/TaskComponents/Tasklist'


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks: [{
        //task: '',
        //time: '',
        //priority:''
      }],
      task: ''
    }
  }

  render() {
    return (
      <div className="App">
          <h1>Activity Planner</h1>
          <TaskList tasks={this.state.tasks}/>
          <TaskForm tasks={this.state.tasks}/>
      </div>
    );
  }
}