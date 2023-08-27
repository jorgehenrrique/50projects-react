import { useEffect } from 'react';
import './GoodCheapFast.css';

export default function GoodCheapFast() {
  useEffect(() => {
    document.title = 'Good Cheap Fast';
  }, []);

  return (
    <div className='body-32'>

      <h2>How do you want your project to be?</h2>
      <div className="toggle-container-32">
        <input type="checkbox" id="good" className="toggle-32" />
        <label htmlFor="good">
          <div className="ball-32"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container-32">
        <input type="checkbox" id="cheap" className="toggle-32" />
        <label htmlFor="cheap">
          <div className="ball-32"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container-32">
        <input type="checkbox" id="fast" className="toggle-32" />
        <label htmlFor="fast">
          <div className="ball-32"></div>
        </label>
        <span>Fast</span>
      </div>

    </div>);
}