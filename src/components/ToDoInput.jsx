import { useState } from 'react';
import AddImage from '../assests/Add.svg'

function ToDoInput({ addToDo }) {
  const [input, setInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim()) {
      addToDo(input);
      setInput('');
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a fun new task..."
        className="todo-input"
      />
      <button type="submit" className="add-button">
        <img src={AddImage} alt="" /> Add
      </button>
    </form>
  );
}

export default ToDoInput;
