import { useEffect, useState } from 'react';
import './GoodCheapFast.css';

export default function GoodCheapFast() {
  useEffect(() => {
    document.title = 'Good Cheap Fast';
  }, []);

  const [good, setGood] = useState(false);
  const [cheap, setCheap] = useState(false);
  const [fast, setFast] = useState(false);

  const handleToggleChange = (e) => {
    const { id } = e.target;
    if (id === 'good') {
      setGood(!good);
      if (!good && cheap && fast) setFast(false);
    } else if (id === 'cheap') {
      setCheap(!cheap);
      if (good && !cheap && fast) setGood(false);
    } else if (id === 'fast') {
      setFast(!fast);
      if (good && cheap && !fast) setCheap(false);
    }
  };

  return (
    <div className='body-32'>

      <h2>How do you want your project to be?</h2>
      <div className="toggle-container-32">
        <input type="checkbox" id="good" className="toggle-32"
          checked={good} onChange={handleToggleChange} />
        <label htmlFor="good">
          <div className="ball-32"></div>
        </label>
        <span>Good</span>
      </div>

      <div className="toggle-container-32">
        <input type="checkbox" id="cheap" className="toggle-32"
          checked={cheap} onChange={handleToggleChange} />
        <label htmlFor="cheap">
          <div className="ball-32"></div>
        </label>
        <span>Cheap</span>
      </div>

      <div className="toggle-container-32">
        <input type="checkbox" id="fast" className="toggle-32"
          checked={fast} onChange={handleToggleChange} />
        <label htmlFor="fast">
          <div className="ball-32"></div>
        </label>
        <span>Fast</span>
      </div>

    </div>);
}