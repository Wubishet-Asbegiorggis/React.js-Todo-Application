import { useState, useEffect } from "react";
import Search from "./components/Search";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || [
      { id: 0, task: "Wake up and Pray in the morning.", status: "Active" },
      { id: 1, task: "Exercise Regularly", status: "Active." },
      { id: 2, task: "Learn new AI, Web and Mobile App development tech skills daily.", status: "Active" },
      { id: 3, task: "Do necessary daily activities including attending lectures and freelancing for daily income.", status: "Active" },
      { id: 4, task: "Enjoy some moments of the day with loved ones.", status: "Active" },
      { id: 5, task: "Plan for the future, pray for it and act accordingly.", status: "Active" },
      { id: 6, task: "Thank God and the ones who deserve it at the end of the day.", status: "Active" }
    ]
  );

  // add todo function
  const addTodo = (data) => {
    setTodos([...todos, { ...data, id: todos.length, status: "Active" }]);
  };

  // delete function
  const delTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // update function
  const updateTodo = (e, id, text) => {
    e.preventDefault();
    const updatedUser = { ...todos[id], task: text, status: "Active" };
    setTodos(todos.map((t, index) => (index === id ? updatedUser : t)));
  };

  const completeTodo = (e, id) => {
    if (e.target.checked) {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status: "Completed" } : todo)));
    } else {
      setTodos(todos.map((todo) => (todo.id === id ? { ...todo, status: "Active" } : todo)));
    }
  };

  const filterTodo = (cat_value) => {
    setTodos(todos.filter((todo) => todo.status === cat_value));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <Search addTodo={addTodo} />
      <Filter filter_todo={filterTodo} />
      <TodoList todos={todos} delTodo={delTodo} update_todo={updateTodo} complete_todo={completeTodo} filter_todo={filterTodo} />
    </div>
  );
}

export default App;
