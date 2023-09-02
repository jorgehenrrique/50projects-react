import { useEffect, useState } from 'react';
import './AnimatedCountdown.css';

export default function AnimatedCountdown() {
  useEffect(() => {
    document.title = 'Animated Countdown';
  }, []);


  // const count = [3, 2, 1, 0];

  const [show, setShow] = useState(false);
  // const [hide, setHide] = useState(false);
  const [num, setNum] = useState(3);

  useEffect(() => {

    setTimeout(() => {
      if (num > 0) setNum(num - 1);
      if (num === 0) setShow(true);
    }, 1000);

    return (() => {
      // setNum(3);
      // setShow(false);
    });
  }, [num]);

  console.log(num);

  return (
    <div className='body-34'>

      <div className={`counter-34 ${show ? 'hide-34' : ''} `}>
        <div className="nums-34">
          <span className="in">3</span>
          <span>2</span>
          <span>1</span>
          <span>0</span>
        </div>
        <h4>Get Ready</h4>
      </div>

      <div className={`final-34 ${show ? 'show-34' : ''}`}>
        <h1>GO</h1>
        <button id="replay">
          <span>Replay</span>
        </button>
      </div>

    </div >);
}