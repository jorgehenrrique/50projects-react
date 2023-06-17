import { useEffect } from 'react';
import './SoundBoard.css';

export default function SoundBoard() {
  useEffect(() => {
    document.title = 'Sound Board';
  }, []);

  return (
    <div className="container-09">
      <h1>Olá Mundo!</h1>
    </div>
  );
}

