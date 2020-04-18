import React, { Component } from 'react'
import TodoList from './TodoList'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

/* export the component to be used in other components */
export default App
