import { useEffect, useState } from 'react';
import './ThemeClock.css';

export default function ThemeClock() {
  useEffect(() => {
    document.title = 'Theme Clock';
  }, []);

  const [dark, setDark] = useState(false);

  return (
    <div className={`body-19 ${dark ? 'dark-19' : ''}`}>

      <button onClick={(() => setDark(!dark))}>Dark mode</button>

      <div className="clock-container-19">
        <div className="clock-19">
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </div>

        <div className="time-19"></div>
        <div className="date-19"></div>
      </div>

    </div >
  );
}