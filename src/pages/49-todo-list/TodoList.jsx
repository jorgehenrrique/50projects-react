import { useEffect } from 'react';
import './TodoList.css';

export default function TodoList() {
  useEffect(() => {
    document.title = 'Todo List';
  }, []);

  return (
    <div className='body-49'>

    </div>);
}