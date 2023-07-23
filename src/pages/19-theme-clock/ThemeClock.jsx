import { useEffect } from 'react';
import './ThemeClock.css';

export default function ThemeClock() {
  useEffect(() => {
    document.title = 'Theme Clock';
  }, []);

  return (
    <div className="body-18">
      <h1>Olá</h1>
    </div >
  );
}