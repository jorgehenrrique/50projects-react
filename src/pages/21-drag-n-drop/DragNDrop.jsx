import { useEffect, useState } from 'react';
import './DragNDrop.css';

export default function DragNDrop() {
  useEffect(() => {
    document.title = 'Drag N Drop';
  }, []);

  const [isDragging, setIsDragging] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
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
        className={`empty-21${isDragging && hoveredIndex === 0 ? ' hovered-21' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(0)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      >
        <div
          className="fill-21"
          draggable={true}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        ></div>
      </div>
      <div
        className={`empty-21${isDragging && hoveredIndex === 1 ? ' hovered-21' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(1)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21${isDragging && hoveredIndex === 2 ? ' hovered-21' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(2)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21${isDragging && hoveredIndex === 3 ? ' hovered-21' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(3)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
      <div
        className={`empty-21${isDragging && hoveredIndex === 4 ? ' hovered-21' : ''}`}
        onDragOver={handleDragOver}
        onDragEnter={() => handleDragEnter(4)}
        onDragLeave={handleDragLeave}
        onDrop={handleDragDrop}
      ></div>
    </div>
  );
}
