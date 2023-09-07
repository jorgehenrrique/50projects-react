import { useEffect, useState } from 'react';
import './3dBackgroundBoxes.css';

export default function BackgroundBoxes3D() {
  useEffect(() => {
    document.title = '3D Background Boxes';
  }, []);

  const [classBig, setClassBig] = useState(true);
  let box = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      box.push(<div key={box.length} className="box-40"
        style={{ backgroundPosition: `${-j * 125}px ${-i * 125}px` }}></div>);
    }
  }

  const handleBox = () => {
    setClassBig(!classBig);
  };

  return (
    <div className='body-40'>

      <button className="magic-40" onClick={handleBox}>Magic 🎩</button>
      <div className={`boxes-40 ${classBig ? 'big-40' : ''}`}>{box}</div>

    </div>);
}