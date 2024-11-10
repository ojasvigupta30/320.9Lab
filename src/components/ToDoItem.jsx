import { useState, useEffect } from 'react';

function ToDoItem({ todo, index, toggleComplete, deleteToDo, editToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  useEffect(() => {
    setNewText(todo.text); // Update the newText when the todo text changes
  }, [todo.text]);

  function handleSave() {
    editToDo(index, newText);
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleChange(event) {
    setNewText(event.target.value);
  }

  function handleToggle() {
    toggleComplete(index);
  }

  function handleDelete() {
    deleteToDo(index);
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleChange}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleToggle}
          />
          <span style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
          <button
            onClick={handleEdit}
            disabled={todo.complete}
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={!todo.complete}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
