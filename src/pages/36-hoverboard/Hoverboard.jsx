/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import './Hoverboard.css';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

export default function Hoverboard() {
  useEffect(() => {
    document.title = 'Hoverboard';
  }, []);

  const setColor = (el) => {
    console.log(el)
    const color = getRandomColor();
    el.style.background = color;
    el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  };

  const removeColor = (el) => {
    console.log(el)

    el.style.background = '#1d1d1d';
    el.style.boxShadow = '0 0 2px #000';
  };

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const squareElements = [];

  for (let i = 0; i < SQUARES; i++) {
    squareElements.push(
      <div
        className="square-36"
        onMouseOver={(e) => setColor(e.target)}
        onMouseOut={(e) => removeColor(e.target)}
      ></div>
    );
  }

  return (
    <div className='body-36'>

      <div className="container-36">
        {squareElements}
      </div>

    </div>);
}