import { useEffect, useState } from 'react';
import './AnimatedCountdown.css';

export default function AnimatedCountdown() {
  useEffect(() => {
    document.title = 'Animated Countdown';
  }, []);

  const [count, setCount] = useState(3);
  const [classis, setClassis] = useState('');

  useEffect(() => {
    setClassis('in');

    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  }, [count]);

  return (
    <div className='body-34'>

      <div className={`counter-34 ${count === 0 ? 'hide-34' : ''} `}>
        <div className="nums-34">
          <span className={classis} onAnimationEnd={() => setClassis('out')}>{count}</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={`final-34 ${count === 0 ? 'show-34' : ''}`}>
        <h1>GO</h1>
        <button onClick={() => setCount(3)}>
          <span>Replay</span>
        </button>
      </div>

    </div >);
}