import { useEffect } from 'react';
import './BackgroundSlider.css';

export default function BackgroundSlider() {
  useEffect(() => {
    document.title = 'Background Slider';
  }, []);

  return (
    <div className="body-18">
      <h1>Olá</h1>
    </div >
  );
}