import { useEffect } from 'react';
import './MobileTabNavigation.css';

const imgs = [
  {
    src: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
    alt: 'home',
    class: 'show-38',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    alt: 'work',
    class: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
    alt: 'blog',
    class: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
    alt: 'about',
    class: '',
  },
];

export default function MobileTabNavigation() {
  useEffect(() => {
    document.title = 'Mobile Tab Navigation';
  }, []);

  return (
    <div className='body-38'>

      <div className="phone-38">
        {/* {imgs.map((img, i) => {
          return <img key={i} src={img.src} alt={img.alt} className={img.class} />
        })} */}
        <img src={imgs[0].src} alt={imgs[0].alt} className={imgs[0].class} />

        <nav>
          <ul>
            <li className="active-38">
              <span>🏠</span>
              <p>Home</p>
            </li>
            <li>
              <span>📦</span>
              <p>Work</p>
            </li>
            <li>
              <span>📖</span>
              <p>Blog</p>
            </li>
            <li>
              <span>🕵️‍♀️</span>
              <p>About Us</p>
            </li>
          </ul>
        </nav>
      </div>

    </div>);
}