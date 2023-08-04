import { useEffect } from 'react';
import './DrawingApp.css';

export default function DrawingApp() {
  useEffect(() => {
    document.title = 'Drawing App';
  }, []);

  return (
    <div className='body-22'>
      <h1>oi</h1>
    </div>
  );
}