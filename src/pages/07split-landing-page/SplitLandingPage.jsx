import { useEffect, useState } from 'react';
import './SplitLandingPage.css';

export default function SplitLandingPage() {
  useEffect(() => {
    document.title = 'Split Landing Page';
  }, []);

  const [isLeftHovered, setIsLeftHovered] = useState(false);
  const [isRightHovered, setIsRightHovered] = useState(false);

  return (
    <div className={`container-07 ${isLeftHovered ? 'hover-left07' : ''} 
                                  ${isRightHovered ? 'hover-right07' : ''}`}>
      <section className='split07 left07'
        onMouseEnter={() => setIsLeftHovered(true)}
        onMouseLeave={() => setIsLeftHovered(false)}>
        <h1>Playstation</h1>
        <button className='btn07'>Buy Now</button>
      </section>

      <section className='split07 right07'
        onMouseEnter={() => setIsRightHovered(true)}
        onMouseLeave={() => setIsRightHovered(false)}>
        <h1>XBox Series</h1>
        <button className='btn07'>Buy Now</button>
      </section>
    </div>
  );
}
