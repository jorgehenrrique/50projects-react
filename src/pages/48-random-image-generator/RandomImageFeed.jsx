import { useCallback, useEffect, useState } from 'react';
import './RandomImageFeed.css';

const unsplashURL = 'https://source.unsplash.com/random/';
const rows = 5;

export default function RandomImageFeed() {
  useEffect(() => {
    document.title = 'Random Image Feed';
  }, []);

  const [imgs, setImgs] = useState([]);

  const getRandomSize = useCallback(() => {
    return `${getRandomNr()}x${getRandomNr()}`
  }, []);

  useEffect(() => {
    for (let i = 0; i < rows * 3; i++) {
      setImgs(prev => [
        ...prev, <img key={i} src={`${unsplashURL}${getRandomSize()}`} />
      ])
    }
    return () => setImgs([]);
  }, [getRandomSize]);

  // Alternativa a baixo.
  // useEffect(() => {
  //   const imgArray = [];
  //   for (let i = 0; i < rows * 3; i++) {
  //     imgArray.push(<img key={i} src={`${unsplashURL}${getRandomSize()}`} />);
  //   }
  //   setImgs(imgArray);
  // }, [getRandomSize]);

  function getRandomNr() {
    return Math.floor(Math.random() * 10) + 300;
  }

  return (
    <div className='body-48'>

      <h1>Random Image Feed</h1>
      <div>
        {imgs && imgs}
      </div>

    </div>
  );
}
