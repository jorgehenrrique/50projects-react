import { useEffect, useState } from 'react';
import './TodoList.css';

export default function TodoList() {
  useEffect(() => {
    document.title = 'Todo List';
  }, []);

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) ?? []);

  const handTodos = (e) => {
    e.preventDefault();

    if (input.trim() !== '') {
      setTodos([...todos, { text: input.trim(), completed: false }]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    const newTodos = todos.filter((_, idx) => idx !== index);
    setTodos(newTodos);
  };

  const handleToggle = (index) => {
    const newTodos = todos.map((todo, idx) => {
      if (idx === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='body-49'>

      <h1>todos</h1>
      <form onSubmit={handTodos}>
        <input type="text" className="input"
          placeholder="Enter your todo" autoComplete="off"
          value={input} onChange={(e) => setInput(e.target.value)} />

        <ul className="todos-49">
          {todos.map((todo, idx) => (
            <li key={idx} onContextMenu={(e) => { e.preventDefault(); handleDelete(idx); }}
              onClick={() => handleToggle(idx)}
              className={todo.completed ? 'completed-49' : ''}>
              {todo.text}
            </li>
          ))}
        </ul>
      </form>
      <small>Left click to toggle completed. <br /> Right click to delete todo</small>

    </div>);
}