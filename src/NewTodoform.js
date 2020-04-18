import React, { Component } from 'react'
import uuid from 'uuid/v4'

class NewTodoForm extends Component {
  constructor(props) {
    super(props)
    this.state = { task: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const newstate = { ...this.state, id: uuid(), completed: false }
    this.props.createTodo(newstate)
    this.setState({ task: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="task"> Add New Todo</label>&nbsp;
          <input
            type="text"
            id="task"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          &nbsp;
          <button>Add Todo</button>
        </div>
        <br />
      </form>
    )
  }
}

/* export the component to be used in other components */
export default NewTodoForm
