import { useState, useEffect } from 'react';
import SaveImage from '../assests/Save.svg' 
import EditImage from '../assests/Edit.svg' 
import DeleteImage from '../assests/Delete.svg' 

function ToDoItem({ todo, index, toggleComplete, deleteToDo, editToDo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  useEffect(() => {
    setNewText(todo.text);
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
    <li className={`todo-item ${todo.complete ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={handleChange}
            className="edit-input"
          />
          <button onClick={handleSave} className="save-button">
            <img src={SaveImage} alt="" / >Save
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleToggle}
            className="checkbox"
          />
          <span className="todo-text">{todo.text}</span>
          <button
            onClick={handleEdit}
            disabled={todo.complete}
            className="edit-button"
          >
            <img src={EditImage} alt="" / > Edit
          </button>
          <button
            onClick={handleDelete}
            disabled={!todo.complete}
            className="delete-button"
          >
            <img src={DeleteImage} alt="" / > Delete
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
