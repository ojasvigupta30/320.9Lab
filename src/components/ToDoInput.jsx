import { useState } from 'react';

function ToDoInput({ addToDo }) {
  const [input, setInput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    if (input.trim()) {
      addToDo(input); // Use the addToDo function from props
      setInput(''); // Clear the input field
    }
  }

  function handleChange(event) {
    setInput(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default ToDoInput;
