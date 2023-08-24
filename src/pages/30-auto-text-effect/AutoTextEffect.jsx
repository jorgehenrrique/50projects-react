import { useEffect, useState } from 'react';
import './AutoTextEffect.css';

export default function AutoTextEffect() {
  useEffect(() => {
    document.title = 'Auto Text Effect';
  }, []);

  const [textStart, setTextStart] = useState('');
  const [speed, setSpeed] = useState(1);
  const text = 'We Love Programming!';
  const speedText = 300 / speed;
  let idx = 0;
  let timeout;

  const handleSpeed = (e) => {
    const newSpeed = parseInt(e.target.value);
    setSpeed(newSpeed);
  };

  const writeText = () => {
    setTextStart(text.slice(0, idx));
    idx++;

    if (idx > text.length) {
      idx = 0;
    }

    timeout = setTimeout(writeText, speedText);
  };

  useEffect(() => {
    clearTimeout(timeout); // Limpa qualquer timeout pendente
    writeText();
    return () => clearTimeout(timeout); // Limpa o timeout ao desmontar o componente
  }, [speedText]);

  return (
    <div className='body-30'>

      <h1>{textStart || 'Starting...'}</h1>

      <div>
        <label htmlFor="speed">Speed:</label>
        <input type="number" name="speed" value={speed} min="1" max="10" step="1" onChange={handleSpeed} />
      </div>

    </div>
  );
}
