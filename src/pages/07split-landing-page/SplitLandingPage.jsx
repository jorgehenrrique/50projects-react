import { useEffect } from 'react';
import './SplitLandingPage.css';

export default function SplitLandingPage() {
  useEffect(() => {
    document.title = 'Split Landing Page';
  }, []);


  return (
    <div className='container-07'>
      <section className='split07 left07'>
        <h1>Playstation</h1>
        <button className='btn07'>Buy Now</button>
      </section>

      <section className='split07 right07'>
        <h1>XBox Series</h1>
        <button className='btn07'>Buy Now</button>
      </section>
    </div>
  );
}