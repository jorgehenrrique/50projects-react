import './IncrementingCounter.css';
import { useEffect, useRef, useState } from 'react';
import instagram from './icon/instagram.png';
import twitter from './icon/twitter.png';
import youtube from './icon/youtube.png';

export default function IncrementingCounter() {
  useEffect(() => {
    document.title = 'Increment Counter';
  }, []);

  const [twitterCount, setTwitterCount] = useState(0);
  const [youtubeCount, setYoutubeCount] = useState(0);
  const [instagramCount, setInstagramCount] = useState(0);

  const twitterTimerRef = useRef(null);
  const youtubeTimerRef = useRef(null);
  const instagramTimerRef = useRef(null);

  useEffect(() => {
    const targetCounts = {
      twitter: 12000,
      youtube: 5000,
      instagram: 7500,
    };

    const updateCounter = (counterName) => {
      const target = targetCounts[counterName];
      const increment = target / 200;

      if (counterName === 'twitter') {
        if (twitterCount < target) {
          twitterTimerRef.current = setTimeout(() => {
            setTwitterCount((count) => Math.ceil(count + increment));
          }, 1);
        } else {
          setTwitterCount(target);
        }
      } else if (counterName === 'youtube') {
        if (youtubeCount < target) {
          youtubeTimerRef.current = setTimeout(() => {
            setYoutubeCount((count) => Math.ceil(count + increment));
          }, 2);
        } else {
          setYoutubeCount(target);
        }
      } else if (counterName === 'instagram') {
        if (instagramCount < target) {
          instagramTimerRef.current = setTimeout(() => {
            setInstagramCount((count) => Math.ceil(count + increment));
          }, 3);
        } else {
          setInstagramCount(target);
        }
      }
    };

    updateCounter('twitter');
    updateCounter('youtube');
    updateCounter('instagram');

    return () => {
      clearTimeout(twitterTimerRef.current);
      clearTimeout(youtubeTimerRef.current);
      clearTimeout(instagramTimerRef.current);
    };
  }, [twitterCount, youtubeCount, instagramCount]);

  return (
    <div className="body-15">

      <div className="counter-container-15">
        <img src={twitter} alt="Twitter" />
        <div className="counter-15" data-target="12000">{twitterCount}</div>
        <span>Twitter Followers</span>
      </div>

      <div className="counter-container-15">
        <img src={youtube} alt="YouTube" />
        <div className="counter-15" data-target="5000">{youtubeCount}</div>
        <span>YouTube Subscribers</span>
      </div>

      <div className="counter-container-15">
        <img src={instagram} alt="Instagram" />
        <div className="counter-15" data-target="7500">{instagramCount}</div>
        <span>Instagram Fans</span>
      </div>

    </div>
  );
}