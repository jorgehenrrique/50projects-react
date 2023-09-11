import { useEffect, useState } from 'react';
import './NetflixMobileNavigation.css';

const logo = 'https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456';

export default function NetflixMobileNavigation() {
  useEffect(() => {
    document.title = 'Netflix Mobile Navigation';
  }, []);

  const [visible, setVisible] = useState(false);

  return (
    <div className='body-45'>

      <button className="open-btn-45" onClick={() => setVisible(true)}>
        <span>𝌮</span>
      </button>

      <img src={logo} alt="Logo" />

      <p>Mobile Navigation</p>

      <div className={`nav-45 nav-black ${visible ? 'visible-45' : ''}`}>
        <div className={`nav-45 nav-red ${visible ? 'visible-45' : ''}`}>
          <div className={`nav-45 nav-white ${visible ? 'visible-45' : ''}`}>
            <button className="close-btn-45" onClick={() => setVisible(false)}>
              <span>Ｘ</span>
            </button>

            <img src={logo} alt="Logo" />

            <ul>
              <li><a href="#">Teams</a></li>
              <li><a href="#">Locations</a></li>
              <li><a href="#">Life at Netflix</a></li>
              <li>
                <ul>
                  <li><a href="#">Netflix culture memo</a></li>
                  <li><a href="#">Work life balance</a></li>
                  <li><a href="#">Inclusion & diversity</a></li>
                  <li><a href="#">Blog</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>);
}