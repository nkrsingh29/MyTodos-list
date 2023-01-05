import logo from "./logo.svg";
import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todo from "./MyComponents/Todo";
import TodoItems from "./MyComponents/TodoItems";

function App() {
  return (
    <>
    <Header title="MyTodosList" home="Home" about="About Us" searchBar={false}/>
    <Footer/> 
    <Todo/>
    <TodoItems/>
    </>
  );
}

export default App;
