import './IncrementingCounter.css';
import { useEffect } from 'react';

export default function IncrementingCounter() {
  useEffect(() => {
    document.title = 'Increment Counter';
  }, []);

  return (
    <div className="body-15">

      <div className="counter-container-15">
        <i className="fab fa-twitter fa-3x"></i>
        <div className="counter-15" data-target="12000"></div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container-15">
        <i className="fab fa-youtube fa-3x"></i>
        <div className="counter-15" data-target="5000">54</div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container-15">
        <i className="fab fa-facebook fa-3x"></i>
        <div className="counter-15" data-target="7500"></div>
        <span>Instagram Fans</span>
      </div>

    </div>
  );
}