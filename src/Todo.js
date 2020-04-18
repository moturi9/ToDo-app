import React, { Component } from 'react'
import './Todo.css'

class Todos extends Component {
  constructor(props) {
    super(props)
    this.state = { isEditing: false, task: this.props.task }
    this.handleRemove = this.handleRemove.bind(this)
    this.toggleForm = this.toggleForm.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleToggle = this.handleToggle.bind(this)
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing })
  }

  handleRemove() {
    this.props.removeTodo(this.props.id)
  }

  handleUpdate(evt) {
    evt.preventDefault()
    this.props.updateTodo(this.props.id, this.state.task)
    this.setState({ isEditing: false })
  }

  handleChange(evt) {
    evt.preventDefault()
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleToggle(evt) {
    this.props.toggleTodo(this.props.id)
  }

  render() {
    let result
    if (this.state.isEditing) {
      result = (
        <form onSubmit={this.handleUpdate}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChange}
          />
          &nbsp;
          <button>Save</button>
          <br />
        </form>
      )
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li
            className={this.props.completed ? 'completed' : ''}
            onClick={this.handleToggle}
          >
            {this.props.task}
          </li>
          <br />
        </div>
      )
    }
    return result
  }
}

/* export the component to be used in other components */
export default Todos
