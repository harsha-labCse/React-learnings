import React, { useState } from 'react';

export const AddTodo = (props) => {

const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

const submit = (e) =>{

    e.preventDefault();

    if(!title || !desc){
        alert("Title or description cannot be empty");
    }
    props.addTodo(title, desc);

}

  return (
    <div className='container'>
        
        <form onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="taskTitle" className="form-label">Todo Title</label>
                <input type="text" value={title} className="form-control" id="taskTitle" onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div className="mb-3">
                <label htmlFor="taskDesc" className="form-label">Todo Description</label>
                <input type="text" value={desc} className="form-control" id="taskDesc"  onChange={(e)=>setDesc(e.target.value)}/>
            </div>
            <button type='submit' className="btn btn-primary">Submit</button>
    </form>


    </div>
  )
}
