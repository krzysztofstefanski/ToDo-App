import React, { Component } from 'react';
import ToDoItem from './ToDoItem'

class Todos extends Component {
  render() {
return this.props.todos.map((todo)=>(
    <ToDoItem />
    
))
}
}

export default Todos;