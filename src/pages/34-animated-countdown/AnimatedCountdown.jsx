import { useEffect, useState } from 'react';
import './AnimatedCountdown.css';

export default function AnimatedCountdown() {
  useEffect(() => {
    document.title = 'Animated Countdown';
  }, []);

  const [states, setStates] = useState({
    count: 3,
    class: ''
  });

  useEffect(() => {
    setStates(prev => ({
      ...prev,
      class: 'in'
    }));

    if (states.count > 0) {
      setTimeout(() => {
        setStates(prev => ({
          ...prev,
          count: prev.count - 1
        }));
      }, 1000);
    }
  }, [states.count]);
  console.log(states.count)
  return (
    <div className='body-34'>

      <div className={`counter-34 ${states.count === 0 ? 'hide-34' : ''} `}>
        <div className="nums-34">
          <span className={states.class} onAnimationEnd={() => setStates(prev => ({ ...prev, class: 'out' }))}>{states.count}</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={`final-34 ${states.count === 0 ? 'show-34' : ''}`}>
        <h1>GO</h1>
        <button onClick={() => setStates(prev => ({ ...prev, count: 3 }))}>
          <span>Replay</span>
        </button>
      </div>

    </div >);
}