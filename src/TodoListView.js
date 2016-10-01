import React from 'react';

const TodoListView = React.createClass({

    propTypes: {
        title: React.PropTypes.string.isRequired
    },    


  getInitialState() {
    return {
      text: ""
    };
  },

    handleTextChange(event) {
        this.setState({text: event.target.value});
    },

    handleSubmit(event) {
        event.preventDefault();
        if ( !(this.state.text === "") ) {
            this.props.callback(
                this.props.title,
                this.props.tasks.push(this.state.text)
                );
            this.setState({text: ""});
        }
    },

    render() {
        var tasks = this.props.tasks.map(
            (task, index) => {
            return <li key={index}>{task}</li>;
        });

        return (
            <div>
                <h1>{this.props.title}</h1>
                <ul>
                    {tasks}
                </ul>
                <h2>Add new task</h2>
                <form 
                    className="todo-name-form" 
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="Task name"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        />
                    <input type="submit" value="Add" />
                </form>                
            </div>
        );
    }

});

export default TodoListView;