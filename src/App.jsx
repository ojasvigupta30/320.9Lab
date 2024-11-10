import { useState, useEffect } from 'react'
import './App.css'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'
import HeadingImage from './assests/Heading.png';


function App() {
  const [todos, setToDos] = useState([]);

  function addToDo(todoText) {
    setToDos([{ text: todoText, complete: false }, ...todos]);
  }

  function toggleComplete(index) {
    const updatedToDos = todos.map(function (todo, id) {
      return id === index ? { ...todo, complete: !todo.complete } : todo;
    });
    setToDos(updatedToDos);
  }

  function deleteToDo(index) {
    const updatedToDos = todos.filter(function (_, id) {
      return id !== index;
    });
    setToDos(updatedToDos);
  }

  function editToDo(index, newText) {
    const updatedToDos = todos.map(function (todo, id) {
      return id === index ? { ...todo, text: newText } : todo;
    });
    setToDos(updatedToDos);
  }

  return (
    <div className="app-container">
      <img src={HeadingImage} 
      className="app-title" 
      alt="todo list" 
      style={{ width: '100%', height: 'auto' }}/>
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
