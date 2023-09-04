import { useEffect } from 'react';
import './Hoverboard.css';

export default function Hoverboard() {
  useEffect(() => {
    document.title = 'Hoverboard';
  }, []);

  return (
    <div className='body-36'>

    </div>);
}