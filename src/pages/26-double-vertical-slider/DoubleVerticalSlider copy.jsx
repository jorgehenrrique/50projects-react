import { useEffect, useState } from 'react';
import './DoubleVerticalSlider.css';

export default function DoubleVerticalSlider() {
  useEffect(() => {
    document.title = 'Double Vertical Slider';
  }, []);

  const [positionLeft, setPositionLeft] = useState(0);
  const [positionRight, setPositionRight] = useState(0);

  const sliderLeft = [
    { backgroundColor: '#FD3555', h1: 'Nature flower', p: 'all in pink' },
    { backgroundColor: '#2A86BA', h1: 'Bluuue Sky', p: 'with its mountains' },
    { backgroundColor: '#252E33', h1: 'Lonely castle', p: 'in the wilderness' },
    { backgroundColor: '#FFB866', h1: 'Flying eagle', p: 'in the sunset' },
  ];

  const sliderRight = [
    'https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80',
    'https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80',
    'https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80'
  ];

  useEffect(() => {
    setPositionLeft(sliderLeft.length - sliderLeft.length);
    setPositionRight(sliderRight.length - 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(positionLeft)
  console.log(positionRight)


  const handleSlideUp = () => {
    if (positionRight === sliderRight.length - 1) {
      setPositionRight(0);
      setPositionLeft(sliderLeft.length - 1);
    }
    else {
      setPositionRight(positionRight + 1);
      setPositionLeft(positionLeft - 1);
    }
  };

  const handleSlideDown = () => {
    if (positionRight === 0) {
      setPositionRight(sliderRight.length - 1);
      setPositionLeft(0);
    }
    else {
      setPositionRight(positionRight - 1);
      setPositionLeft(positionLeft + 1);
    }
  };

  return (
    <div className='body-26'>

      <div className="slider-container-26">
        <div className="left-slide-26" style={{ transform: `translateY(${positionLeft * 100}vh)` }}>
          <div style={{ backgroundColor: `${sliderLeft[positionLeft].backgroundColor}` }}>
            <h1>{sliderLeft[positionLeft].h1}</h1>
            <p>{sliderLeft[positionLeft].p}</p>
          </div>
        </div>

        <div className="right-slide-26" style={{ transform: `translateY(-${positionRight * 100}vh)` }}>
          <div style={{ backgroundImage: `url(${sliderRight[positionRight]})` }}></div>
        </div>

        <div className="action-buttons-26">
          <button onClick={handleSlideDown}>↓</button>
          <button onClick={handleSlideUp}>↑</button>
        </div>
      </div>

    </div>
  );
}