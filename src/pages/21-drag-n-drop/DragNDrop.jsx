import { useEffect, useState } from 'react';
import './DragNDrop.css';

export default function DragNDrop() {
  useEffect(() => {
    document.title = 'Drag N Drop';
  }, []);

  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hold, setHold] = useState(false);
  const [invisible, setInvisible] = useState(false);

  const handleDragStart = () => {
    setHold(true);
    setTimeout(() => setInvisible(true), 0);
  };

  const handleDragEnd = () => {
    setHold(false);
    setInvisible(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleDragLeave = () => {
    setHoveredIndex(-1);
  };

  const handleDragDrop = (e) => {
    setHoveredIndex(-1);
    e.target.appendChild(document.querySelector('.fill-21'));
  };

  return (
    <div className='body-21'>
      <div
        className={`empty-21 ${hoveredIndex === 1 && 'hovered-21'}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(1)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      >
        <div
          className={`fill-21 ${hold && 'hold-21'} ${invisible && 'invisible-21'}`}
          draggable={true}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        ></div>
      </div>
      <div
        className={`empty-21 ${hoveredIndex === 2 && 'hovered-21'}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(2)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21 ${hoveredIndex === 3 && 'hovered-21'}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(3)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21 ${hoveredIndex === 4 && 'hovered-21'}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(4)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21 ${hoveredIndex === 5 && 'hovered-21'}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(5)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
    </div>
  );
}
