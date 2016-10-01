import React from 'react';
import TodoListView from "./TodoListView.js";
import NewTaskList from "./NewTaskList.js";
import Immutable from "immutable";
import './App.css';

const App = React.createClass( {

  getInitialState() {
    return {
      lists: Immutable.fromJS(
        {
        "Terminal Market": [
          "Shoyu",
          "Konbu",
          "Tare"
        ],
        "Work": [
          "Review PR",
          "Publish feature",
          "1:1"
        ]        
      }
      )
    }
  },

  addTaskList(name) {
    this.updateTaskList(name, Immutable.List());
  },

  updateTaskList(name, tasks) {
    var newList = 
      this.state.lists.set(name, tasks);
    this.setState({lists: newList});
  },

  render() {
    var lists = this.state.lists.map(
      (list, index) => {
        return <TodoListView
          callback={this.updateTaskList}
          key={index} 
          title={index} tasks={list}
          />;
      }
    ).valueSeq();

    return (
      <div className="App">
        {lists}
        <NewTaskList callback={this.addTaskList}/>
      </div>
    );
  }
});

export default App;
