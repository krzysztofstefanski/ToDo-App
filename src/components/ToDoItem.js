import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class ToDoItem extends Component {

getStyle = () =>{
  return {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  borderBottom:'1px #ccc dotted',
  textDecoration :  this.props.todo.completed ? 'line-throught' : 'none'

      }
    }

    render() {

      const {id,title} = this.props.todo

    return (
      <div style={this.getStyle()}>
<p>
  <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/>
  {' '}
{title}</p>
<p>little zmiana</p>
      </div>
    )
  }
}
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}




export default ToDoItem
