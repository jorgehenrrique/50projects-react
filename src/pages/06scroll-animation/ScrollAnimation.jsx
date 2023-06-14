import { useEffect } from 'react';
import './ScrollAnimation.css';

export default function ScrollAnimation() {
  useEffect(() => {
    document.title = 'Scroll Animation';
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      const boxes = Array.from(document.querySelectorAll('.box-06'));

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add('show-06');
        } else {
          box.classList.remove('show-06');
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
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
      <div className="box-06"><h2>Content</h2></div>
    </div>
  );
}