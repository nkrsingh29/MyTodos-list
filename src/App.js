import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
     console.log("Delete buttong clicked", todo);
     setTodos(todos.filter((e) => {
          return e!==todo;
     }))
  }
  
  const [todos, setTodos] = useState([
   {sno : 1,
    title : "Go to market",
   desc  : "You need to go to the market to do this job done"},
   {sno : 2,
    title : "Go to Office",
   desc  : "Join office on time"},
   {sno : 3,
    title : "Go to the mall",
   desc  : "you need to go to the mall for some shoping"}
])

  return (
    <>
    <Header title="MyTodosList" home="Home" about="About Us" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/> 
    </>
  );
}

export default App;
