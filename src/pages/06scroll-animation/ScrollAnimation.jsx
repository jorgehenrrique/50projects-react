import { useEffect } from 'react';
import './ScrollAnimation.css';

export default function ScrollAnimation() {
  document.title = 'Scroll Animation';

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const boxes = Array.from(document.querySelectorAll('.box'));

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show');
        } else {
          box.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-06">
      <h1>Role para ver a animação</h1>
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