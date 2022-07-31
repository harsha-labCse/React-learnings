import React from 'react'

export const TodoItems = (props) => {
    //we can use todoItem instead of props to avoid "props.todoItem"
  return (
    <div>
        <h5>{props.todoItem.Title}</h5>
        <p>{props.todoItem.Desc}</p>
        <button className="btn btn-danger" onClick={()=>{props.onDelete(props.todoItem)}}>Delete</button>
    </div>
  )
}
