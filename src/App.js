import React, {
  Component
} from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {

  state = {
    todos : [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false

      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: true

      },
      {
        id:4,
        title:'Buy monitor',
        complited:false,
      }
    ]
  }
// Toggle Complete
  markComplete = (id) => {
    this.setState ({todos: this.state.todos.map((todo)=>{
if(todo.id === id){
  todo.completed = !toString.completed
}
return todo
    })})
      }

 //Delete ToDo
 
 delToDo = (id)=>{
   console.log(id)
 }
      

render() {
    return ( 
      <div className = "App" >
      
      <Todos  todos={this.state.todos} markComplete={this.markComplete}
      delToDo={this.delToDo}/ >

      
      </div>
    )
  }
}

export default App;
