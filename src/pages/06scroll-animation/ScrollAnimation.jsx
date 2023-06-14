import { useEffect } from 'react';
import './ScrollAnimation.css';

export default function ScrollAnimation() {
  document.title = 'Scroll Animation';

  useEffect(() => {
    const checkBoxes = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const boxes = document.querySelectorAll('.box');

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', checkBoxes);
    checkBoxes();

    return () => {
      window.removeEventListener('scroll', checkBoxes);
    };
  }, []);

  return (
    <div className="container-06">
      <h1>Scroll to see the animation</h1>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
      <div className="box"><h2>Content</h2></div>
    </div>
  );
}