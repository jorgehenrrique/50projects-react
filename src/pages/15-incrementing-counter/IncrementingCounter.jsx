import './IncrementingCounter.css';
import { useEffect, useState } from 'react';
import instagram from './icon/instagram.png';
import twitter from './icon/twitter.png';
import youtube from './icon/youtube.png';

export default function IncrementingCounter() {
  useEffect(() => {
    document.title = 'Increment Counter';
  }, []);

  const [state, setState] = useState({
    twitterCount: 0,
    youtubeCount: 0,
    instagramCount: 0
  });

  useEffect(() => {
    const targetCounts = {
      twitter: 12000,
      youtube: 5000,
      instagram: 7500,
    };

    Object.keys(targetCounts).forEach((counterName) => {
      const target = targetCounts[counterName];

      const increment = target / 200;

      if (state[counterName + 'Count'] < target) {
        setTimeout(() => {
          setState((prev) => ({
            ...prev,
            [counterName + 'Count']: Math.ceil(prev[counterName + 'Count'] + increment),
          }));
        }, 4);
      } else {
        setState((prev) => ({ ...prev, [counterName + 'Count']: target }));
      }
    })
  }, [state.twitterCount, state.youtubeCount, state.instagramCount]);

  return (
    <div className="body-15">
      <div className="counter-container-15">
        <img src={twitter} alt="Twitter" />
        <div className="counter-15">{state.twitterCount}</div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container-15">
        <img src={youtube} alt="YouTube" />
        <div className="counter-15">{state.youtubeCount}</div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container-15">
        <img src={instagram} alt="Instagram" />
        <div className="counter-15">{state.instagramCount}</div>
        <span>Instagram Fans</span>
      </div>
    </div>
  );
}