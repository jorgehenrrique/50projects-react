import { useEffect, useState } from 'react';
import './DoubleClickHeart.css';

export default function DoubleClickHeart() {
  useEffect(() => {
    document.title = 'Double Click Heart';
  }, []);

  const heart = ['❤️', '💙', '💜', '💚', '🧡', '💛', '🖤', '🤎', '🩶', '🤍', '🩵', '🩷', '❤️‍🔥'];

  const getRandomHeart = () => {
    const randomIndex = Math.floor(Math.random() * heart.length);
    return heart[randomIndex];
  };

  const [like, setLike] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [style, setStyle] = useState({
    top: '0px',
    left: '0px'
  });

  const handleDoubleClick = (e) => {
    setLike(like + 1);
    setClicked(true);
    createHeart(e);

    setTimeout(() => {
      setClicked(false);
    }, 800);
  };

  const createHeart = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = x - leftOffset
    const yInside = y - topOffset

    setStyle({
      top: `${yInside}px`,
      left: `${xInside}px`
    });
  }

  return (
    <div className='body-29'>

      <h3>Double click on the image to <i>♥️</i> it</h3>
      <small>You liked it <span>{like}</span> times</small>

      <div className="loveMe-29"
        onDoubleClick={handleDoubleClick} style={{ userSelect: 'none' }}>
        {clicked && <span className='heart-29' style={style}>{getRandomHeart()}</span>}
      </div>

    </div>
  );
}