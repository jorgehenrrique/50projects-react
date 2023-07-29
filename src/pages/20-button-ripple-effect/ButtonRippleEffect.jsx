import { useEffect } from 'react';
import './ButtonRippleEffect.css';

export default function ButtonRippleEffect() {
  useEffect(() => {
    document.title = 'Button Ripple Effect';
  }, []);

  return (
    <div className='body-20'>

      <button>Click Me</button>

    </div>
  );
}