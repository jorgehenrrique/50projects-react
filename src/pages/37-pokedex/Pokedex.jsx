import { useEffect } from 'react';
import './Pokedex.css';

export default function Pokedex() {
  useEffect(() => {
    document.title = 'Pokedex';
  }, []);

  return (
    <div className='body-37'>

    </div>);
}