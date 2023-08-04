import { useEffect } from 'react';
import './DrawingApp.css';

export default function DrawingApp() {
  useEffect(() => {
    document.title = 'Drawing App';
  }, []);

  return (
    <div className='body-22'>
      <canvas className="canvas-22" width="800" height="700"></canvas>

      <div className="toolbox-22">
        <button id="decrease">-</button>
        <span id="size">10</span>
        <button id="increase">+</button>
        <input type="color" id="color" />
        <button id="clear">X</button>
      </div>

    </div>
  );
}