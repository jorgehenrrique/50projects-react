import { useEffect, useRef } from 'react';
import './AutoTextEffect.css';

export default function AutoTextEffect() {
  useEffect(() => {
    document.title = 'Auto Text Effect';
  }, []);

  const speed = useRef(1);

  const handleSpeed = () => {
    console.log(speed.current.value);

  };

  return (
    <div className='body-30'>

      <h1>Starting...</h1>

      <div>
        <label htmlFor="speed">Speed:</label>
        <input type="number" name="speed" defaultValue="1" min="1" max="10" step="1" ref={speed} onChange={handleSpeed} />
      </div>

    </div>
  );
}