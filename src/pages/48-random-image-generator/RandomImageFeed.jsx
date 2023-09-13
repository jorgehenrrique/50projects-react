import { useEffect } from 'react';
import './RandomImageFeed.css';

export default function RandomImageFeed() {
  useEffect(() => {
    document.title = 'Random Image Feed';
  }, []);

  return (
    <div className='body-48'>

      <h1>Random Image Feed</h1>
      <div></div>

    </div>);
}