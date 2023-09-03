import { useEffect } from 'react';
import './ImageCarousel.css';

const imgsObj = [
  {
    link: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
    alt: 'first-image'
  },
  {
    link: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    alt: 'second-image'
  },
  {
    link: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    alt: 'third-image'
  },
  {
    link: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
    alt: 'fourth-image'
  }
];

export default function ImageCarousel() {
  useEffect(() => {
    document.title = 'Image Carousel';
  }, []);

  const handlePrev = () => { };
  const handleNext = () => { };

  return (
    <div className='body-35'>

      <div className="carousel-35">
        <div className="image-container-35">

          {/* {imgsObj.map((img, idx) => {
            return <img key={idx} src={img.link}
              alt={img.alt} />
          })} */}

          <img src={imgsObj[0].link}
            alt={imgsObj[0].alt} />

        </div>

        <div className="buttons-container-35">
          <button onClick={handlePrev}>Prev</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>

    </div>);
}