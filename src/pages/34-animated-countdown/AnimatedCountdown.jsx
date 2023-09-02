import { useEffect, useState } from 'react';
import './AnimatedCountdown.css';

export default function AnimatedCountdown() {
  useEffect(() => {
    document.title = 'Animated Countdown';
  }, []);

  const [show, setShow] = useState(false);
  const [num, setNum] = useState(3);
  const [classis, setClassis] = useState('');

  useEffect(() => {
    setClassis('in');
    setTimeout(() => {
      if (num > 0) setNum(num - 1);
      if (num === 0) setShow(true);
    }, 1000);
  }, [num]);

  console.log(num);

  const handleReplay = () => {
    setShow(false);
    setNum(3);
  };

  return (
    <div className='body-34'>

      <div className={`counter-34 ${show ? 'hide-34' : ''} `}>
        <div className="nums-34">
          <span className={classis} onAnimationEnd={() => setClassis('out')}>{num}</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={`final-34 ${show ? 'show-34' : ''}`}>
        <h1>GO</h1>
        <button onClick={handleReplay}>
          <span>Replay</span>
        </button>
      </div>

    </div >);
}