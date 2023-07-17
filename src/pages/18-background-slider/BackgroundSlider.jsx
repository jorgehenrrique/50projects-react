/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './BackgroundSlider.css';

export default function BackgroundSlider() {
  useEffect(() => {
    document.title = 'Background Slider';
  }, []);

  const [position, setPosition] = useState(0);

  const imgs =
    ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
      'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
      'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80']

  useEffect(() => {
    // Pré-carregar as imagens em segundo plano
    imgs.forEach((imgUrl) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = imgUrl;
      document.head.appendChild(link);
    });

    // Limpeza ao desmontar o componente
    return () => {
      // Remover os elementos <link> do cabeçalho do documento
      imgs.forEach((imgUrl) => {
        const link = document.querySelector(`link[href="${imgUrl}"][rel="prefetch"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  const handlePositionLeft = () => {
    if (position === 0) setPosition(imgs.length - 1)
    else setPosition(position - 1)
  };

  const handlePositionRight = () => {
    if (position === imgs.length - 1) setPosition(0)
    else setPosition(position + 1)
  };

  return (
    <div className="body-18" style={{ backgroundImage: `url(${imgs[position]})` }}>
      <div className="slider-container-18">
        <div
          className='slide-18'
          style={{ backgroundImage: `url(${imgs[position]})` }}>
        </div>

        <button className='arrow18 left-arrow-18'
          onClick={handlePositionLeft}>←</button>
        <button className='arrow18 right-arrow-18'
          onClick={handlePositionRight}>→</button>
      </div>
    </div >
  );
}