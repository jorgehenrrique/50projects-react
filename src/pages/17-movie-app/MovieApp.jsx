import { useEffect } from 'react';
import './MovieApp.css';

export default function MovieApp() {
  useEffect(() => {
    document.title = 'Movie App';
  }, []);

  return (
    <div className="body-17">

    </div >
  );
}