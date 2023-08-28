import { useEffect } from 'react';
import './NotesApp.css';

export default function NotesApp() {
  useEffect(() => {
    document.title = 'Notes App';
  }, []);

  return (
    <div className='body-33'>

    </div>
  );
}