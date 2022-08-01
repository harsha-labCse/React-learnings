import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header'; //we don't have to use {} as export is default
import {Todos} from './MyComponents/Todos'; //we have to use {} as export is not default for this
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";

function App() {

  const addTodo = (title, desc)=>{
    console.log("Add item button", title, desc);
  }

  const onDelete = (todoItem) =>{
      console.log("I am onDelete button", todoItem);

      // let index = todos.indexOf(todoItem);
      // todos.slice(index);
      //This dosen't work in react
      // soo we need to use  state hook

      setCount(todos.filter((e)=>{
        return e!==todoItem;
      }));
  }

  //As we need to use state hook, instead of "let todos" we use,
  const [todos, setCount] = useState([
    {S_No : 1,
      Title : "Go to mall",
      Desc : "Reach the mall early to get discounts"
    },
    {S_No : 2,
      Title : "Go to market",
      Desc : "Reach the market early"
    },
    {S_No : 3,
      Title : "Go to school",
      Desc : "Reach the school on time"
    },
  ]);

  return (
    // <>    //html content should be embeded in something like id, className  if not we have to embed that in <>  </>
    // <h3>Todo</h3>
    // <p>My app works</p>
    // </>

   <>
      <Header title = "MyTodosList" searchBar = {false}/>
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos}  onDelete={onDelete}/>
      <Footer/>
   </>

  );
}

export default App;
