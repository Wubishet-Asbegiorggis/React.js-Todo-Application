import { useState } from "react";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState([
    { id: 0, task: "Wake up and Pray in the morning.", status: "Active" },
    { id: 1, task: "Exercise Regularly", status: "Active." },
    { id: 2, task: "Learn new AI, Web and Mobile App development tech skills daily.", status: "Active" },
    { id: 3, task: "Do necessary daily activities including attending lectures and freelancing for daily income.", status: "Active" },
    { id: 4, task: "Enjoy some moments of the day with loved ones.", status: "Active" },
    { id: 5, task: "Plan for the future, pray for it and act accordingly.", status: "Active" },
    { id: 6, task: "Thank God and the ones who deserve it at the end of the day.", status: "Active" },
    // { id: 5, task: "Pray to God", status: "Active" },
  ]);


// add todo function
  const addTodo = (data) => {
    setTodos( [ ...todos, data={...data, id:parseInt(todos[todos.length-1].id) + 1, status:"Active"}] )
    console.log(data)
  }

  // delete function
  const delTodo = (id) => {
    setTodos(todos.filter( todo => todo.id != id ))
  }


  // update function
  const updateTodo = (e, id, text) => {
    e.preventDefault()
    // this line helps to get the current todo based on the ID called todoId in TodoList
    const todo = todos[id]
    const updatedUser = { ...todo, task:text, status:"Active" }
    setTodos(todos.map(t => t.id == todo.id ? updatedUser : t))

  }

  const completeTodo = (e, id) => {

    if(e.target.checked){
      console.log("okay")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Completed"}: todo))
    }
    else
    {
      console.log("omo")
      setTodos(todos.map(todo => todo.id == id ? { ...todo, status:"Active"}: todo))
    }

   
  }

  const filterTodo = (cat_value) => {
    // setTodos(todos.filter(todo => todo.status == cat_value))
    setTodos(todos.filter((todo) => todo.status == cat_value))
  }


  return (
    <div className="todo-container">
      <Search addTodo = { addTodo } />
      <Filter filter_todo = { filterTodo }/>
      <TodoList todos = { todos } delTodo = { delTodo } update_todo = { updateTodo } complete_todo = { completeTodo } filter_todo = { filterTodo } />
    </div>
  );
}



export default App;
