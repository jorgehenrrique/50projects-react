import { useEffect, useState } from 'react';
import './BlurryLoading.css';


export default function BlurryLoading() {
  document.title = 'Blurry Loading';

  const [blur, setBlur] = useState(20);
  const [count, setCount] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    if (count < 100) {
      setTimeout(() => {
        setBlur(blur - 0.2);
        setCount(count + 1);
        setOpacity(opacity - 0.01)
      }, 25);
    }
  }, [count, blur, opacity]);

  return (
    <>
      <div className="container-05" style={{ filter: `blur(${blur}px)` }}></div>
      <span className='loading-text05' style={{ filter: `opacity(${opacity})` }}>{count}%</span>
    </>
  );
}