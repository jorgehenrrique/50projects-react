import { useEffect } from 'react';
import './TestimonialBoxSwitcher.css';

export default function TestimonialBoxSwitcher() {
  useEffect(() => {
    document.title = 'Testimonial Box Switcher';
  }, []);

  const imgLink = 'https://randomuser.me/api/portraits/women/46.jpg';

  return (
    <div className='body-48'>

      <div className="testimonial-container-48">
        <div className="progress-bar-48"></div>
        <div className="quote-right-48">”</div>
        <div className="quote-left-48">“</div>
        <p>
          I&#39;ve worked with literally hundreds of HTML/CSS developers and I have to
          say the top spot goes to this guy. This guy is an amazing developer. He
          stresses on good, clean code and pays heed to the details. I love
          developers who respect each and every aspect of a throughly thought out
          design and do their best to put it in code. He goes over and beyond and
          transforms ART into PIXELS - without a glitch, every time.
        </p>
        <div className="user-48">
          <img src={imgLink} alt="user" />

          <div className="user-details-48">
            <h4>Miyah Myles</h4>
            <p>Marketing</p>
          </div>
        </div>
      </div>

    </div>);
}