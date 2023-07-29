import { useEffect, useState } from 'react';
import './ButtonRippleEffect.css';

export default function ButtonRippleEffect() {
  useEffect(() => {
    document.title = 'Button Ripple Effect';
  }, []);

  const [circle, setCircle] = useState(false);
  const [style, setStyle] = useState({});

  const handleClick = (e) => {
    const x = e.pageX;
    const y = e.pageY;

    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    setCircle(true);
    setTimeout(() => {
      setCircle(false);
    }, 500);

    // Criar objeto com as propriedades CSS dinamicamente
    const circleStyle = {
      top: yInside + 'px',
      left: xInside + 'px',
    };

    // Atualizar o estado com o novo estilo
    setStyle(circleStyle);
  };

  return (
    <div className='body-20'>

      <button onClick={handleClick}>Click Me
        {circle && <span className='circle-20'
          style={style}></span>}</button>

    </div>
  );
}