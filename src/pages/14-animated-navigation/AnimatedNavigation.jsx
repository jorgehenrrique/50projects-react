import { useEffect, useState } from 'react';
import './AnimatedNavigation.css';

export default function AnimatedNavigation() {
  useEffect(() => {
    document.title = 'Animated Navigation';
  }, []);

  const [active, setActive] = useState(false);

  return (
    <div className="body-14">
      <nav className={`nav-14 ${active ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="icon toggle" onClick={() => setActive(!active)}>
          <div className="line line1">+</div>
          <div className="line line2">+</div>
        </button>
      </nav>
    </div>
  );
}