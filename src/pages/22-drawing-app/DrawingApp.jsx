import { useEffect, useRef, useState } from 'react';
import './DrawingApp.css';

export default function DrawingApp() {
  useEffect(() => {
    document.title = 'Drawing App';
  }, []);

  const [color, setColor] = useState('black');
  const [isPressed, setIsPressed] = useState(false);
  const [size, setSize] = useState(10);

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.lineWidth = size * 2; // Define o tamanho da linha
  }, [size]);

  let x;
  let y;

  const handleMouseDown = (e) => {
    setIsPressed(true);

    x = e.offsetX;
    y = e.offsetY;
  };

  const handleMouseUp = () => {
    setIsPressed(false);

    x = undefined;
    y = undefined;
  };

  const handleMouseMove = (e) => {
    if (isPressed) {
      const x2 = e.nativeEvent.offsetX;
      const y2 = e.nativeEvent.offsetY;

      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);

      x = x2;
      y = y2;
    }
  };

  function drawCircle(x, y) {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
  }

  function drawLine(x1, y1, x2, y2) {
    const ctx = canvasRef.current.getContext('2d');
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.stroke()
  }

  const handleIncreaseSize = () => {
    if (size < 50) setSize(size + 5);
  };

  const handleDecreaseSize = () => {
    if (size > 5) setSize(size - 5);
  };

  const handleColor = (e) => {
    setColor(e.target.value)
  };

  const handleClear = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  return (
    <div className='body-22' onMouseUp={handleMouseUp}>

      <canvas className="canvas-22" ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        width="800" height="700"></canvas>

      <div className="toolbox-22">
        <button onClick={handleDecreaseSize}>-</button>
        <span>{size}</span>
        <button onClick={handleIncreaseSize}>+</button>
        <input type="color" defaultValue={color} onChange={handleColor} />

        <button onClick={handleClear}>X</button>
      </div>

    </div>
  );
}