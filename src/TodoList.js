import React, { Component } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoform'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = { todos: [] }
    this.create = this.create.bind(this)
    this.remove = this.remove.bind(this)
    this.update = this.update.bind(this)
    this.toggleCompletion = this.toggleCompletion.bind(this)
  }

  create(newTodo) {
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  remove(id) {
    this.setState({ todos: this.state.todos.filter(t => t.id !== id) })
  }

  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, task: updatedTask }
      } else {
        return t
      }
    })

    this.setState({ todos: updatedTodos })
  }

  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map(t => {
      if (t.id === id) {
        return { ...t, completed: !t.completed }
      } else {
        return t
      }
    })

    this.setState({ todos: updatedTodos })
  }
  render() {
    const todos = this.state.todos.map(todo => {
      return (
        <Todo
          key={todo.id}
          task={todo.task}
          completed={todo.completed}
          removeTodo={this.remove}
          updateTodo={this.update}
          toggleTodo={this.toggleCompletion}
          id={todo.id}
        />
      )
    })
    return (
      <div>
        <h1>To Do List </h1>
        <NewTodoForm createTodo={this.create} />
        <ul>{todos}</ul>
      </div>
    )
  }
}

/* export the component to be used in other components */
export default TodoList
