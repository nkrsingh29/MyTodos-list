import React from 'react'
import TodoItems from "./TodoItems";

const Todos = (props) => {
  return (
    <div className="container my-3">
      <h3 className='text-center my-3'>Todo List!</h3>

      {props.todos.length !== 0 ? props.todos.map( (todo)=>{
               return <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
       }): "No todos"}
    </div>
  )
}

export default Todos
