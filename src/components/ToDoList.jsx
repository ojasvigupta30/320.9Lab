import React from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ todos, toggleComplete, deleteToDo, editToDo }) {
  return (
    <ul>
      {todos.map(function (todo, index) {
        return (
          <ToDoItem
            key={index}
            index={index}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
            editToDo={editToDo}
          />
        );
      })}
    </ul>
  );
}

export default ToDoList;
