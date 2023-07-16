import { useEffect, useState } from 'react';
import './BackgroundSlider.css';

export default function BackgroundSlider() {
  useEffect(() => {
    document.title = 'Background Slider';
  }, []);

  const [active, setActive] = useState(true);

  const imgs =
    ['https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
      'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
      'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80']

  return (
    <div className="body-18">
      <div className="slider-container-18">
        {/* {imgs.map((img, i) => {
          return ( */}
        <div
          className={`slide-18 ${active ? 'active18' : ''}`}
          style={{ backgroundImage: `url(${imgs[1]})` }}>
        </div>
        {/* );
        })} */}
        <button className='arrow18 left-arrow-18'>🔙</button>
        <button className='arrow18 right-arrow-18'>🔜</button>
      </div>
    </div >
  );
}