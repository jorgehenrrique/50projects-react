import { useEffect } from 'react';
import './MovieApp.css';

export default function MovieApp() {
  useEffect(() => {
    document.title = 'Movie App';
  }, []);

  return (
    <div className="body-17">
      <header className='header-17'>
        <input type="search" placeholder='Buscar' />
      </header>
      <main className='main-17'>

      </main>
    </div >
  );
}