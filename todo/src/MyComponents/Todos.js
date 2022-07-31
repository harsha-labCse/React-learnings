import React from 'react'
import { TodoItems } from './TodoItems'

export const Todos = (props) => {
  return (
    <div className='container'>
        <h3 className='text-center my-3'>Todos List</h3>
        {props.todos.length===0 ? "no todos to display": 
        props.todos.map((todoItem)=>{
            return (
            <>

            <TodoItems todoItem = {todoItem} key={todoItem.S_No} onDelete={props.onDelete}/>
            <br/>
            </>
            )
        })}
        

    </div>
   
  )
}
