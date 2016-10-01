import React from 'react';

const NewTaskList = React.createClass({

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
            this.props.callback(this.state.text);
            this.setState({text: ""});
        }
    },

    render() {
        return (
            <div>
                <h2>Create a new list</h2>
                <form 
                    className="todo-list-name-form" 
                    onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="List name"
                        value={this.state.text}
                        onChange={this.handleTextChange}
                        />
                    <input type="submit" value="Add" />
                </form>
            </div>
        )
    }

});

export default NewTaskList;