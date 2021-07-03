import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import {AddTodo} from './MyComponents/AddTodo';
import {About} from './MyComponents/About';
import React,{useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log("Delete Btn Clicked : ",todo);
    setTodos(todos.filter((e)=>
      {
        return e!==todo;
      }
    ));

  }
  const addTodo = (tittle,desc)=> {
    let sno;
    todos.length?sno = todos[todos.length-1].sno + 1 : sno = 1;
    /*if(todos.length>0)
    {
      sno = todos[todos.length-1].sno + 1;
    }
    else
    {
      sno = 1;
    }*/
    const myTodo = { sno:sno,tittle:tittle,desc:desc}
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <Router>
      <div className="App">
        <Header tittle = "ToDo List" searchBar={false}/>
        <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodo addTodo={addTodo}/>
                <Todos todos = {todos} onDelete={onDelete}/>
              </>
            )
          }}>
           
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          
        </Switch>
        
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
