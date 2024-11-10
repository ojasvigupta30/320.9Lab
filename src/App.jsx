import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoInput from './components/ToDoInput'
import ToDoItem from './components/ToDoItem'
import ToDoList from './components/ToDoList'


function App() {
  const [todos, setToDos] = useState([]);

  // Function to add a new todo
  function addToDo(todoText) {
    setToDos([{ text: todoText, complete: false }, ...todos]);
  }

  // Function to toggle completion status
  function toggleComplete(index) {
    const updatedToDos = todos.map(function (todo, id) {
      return id === index ? { ...todo, complete: !todo.complete } : todo;
    });
    setToDos(updatedToDos);
  }

  // Function to delete a todo
  function deleteToDo(index) {
    const updatedToDos = todos.filter(function (_, id) {
      return id !== index;
    });
    setToDos(updatedToDos);
  }

  // Function to edit a todo
  function editToDo(index, newText) {
    const updatedToDos = todos.map(function (todo, id) {
      return id === index ? { ...todo, text: newText } : todo;
    });
    setToDos(updatedToDos);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ToDoInput addToDo={addToDo} />
      <ToDoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteToDo={deleteToDo}
        editToDo={editToDo}
      />
    </div>
  );
}

export default App
