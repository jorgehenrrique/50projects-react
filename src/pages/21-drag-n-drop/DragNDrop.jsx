import { useEffect } from 'react';
import './DragNDrop.css';

export default function DragNDrop() {
  useEffect(() => {
    document.title = 'Drag N Drop';
  }, []);

  return (
    <div className='body-21'>

      <div className="empty-21">
        <div className="fill-21" draggable={true}></div>
      </div>
      <div className="empty-21"></div>
      <div className="empty-21"></div>
      <div className="empty-21"></div>
      <div className="empty-21"></div>

    </div>
  );
}