import { useEffect, useState } from 'react';
import './BlurryLoading.css';

export default function BlurryLoading() {
  useEffect(() => {
    document.title = 'Blurry Loading';
  }, []);

  // const [blur, setBlur] = useState(20);
  // const [count, setCount] = useState(0);
  // const [scale, setScale] = useState(1.5);
  // const [opacity, setOpacity] = useState(1);
  const [state, setState] = useState({
    blur: 20,
    count: 0,
    opacity: 1
  });

  // useEffect(() => {
  //   if (count < 100) {
  //     setTimeout(() => {
  //       setBlur(blur - 0.2);
  //       setCount(count + 1);
  //       setOpacity(opacity - 0.01)
  //       setScale(scale - 0.005)
  //     }, 25);
  //   }
  // }, [count, blur, opacity, scale]);
  useEffect(() => {
    if (state.count < 100) {
      setTimeout(() => {
        setState((prev) => ({
          ...prev,
          blur: prev.blur - 0.2,
          count: prev.count + 1,
          opacity: prev.opacity - 0.01,
        }));
      }, 25);
    }
  }, [state]);

  return (
    // <div style={{ overflow: 'auto' }}>
    //   <div className="container-05" style={{ filter: `blur(${blur}px)`, transform: `scale(${scale})` }}></div>
    //   <span className='loading-text05' style={{ filter: `opacity(${opacity})` }}>{count}%</span>
    // </div>

    <div>
      <div className="container-05" style={{ filter: `blur(${state.blur}px)` }} />
      <span className='loading-text05' style={{ filter: `opacity(${state.opacity})` }}>
        {state.count}%
      </span>
    </div>
  );
}
