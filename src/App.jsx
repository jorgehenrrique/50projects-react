import './styles/reset.css';
import './styles/App.css';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    document.title = '50projects React';
  }, []);
  const { pathname } = useLocation();
  const [opacity, setOpacity] = useState(null);

  useEffect(() => {
    (pathname === '/50projects-react/' || pathname === '/50projects-react') ?
      setOpacity(true) : setOpacity(false);

    return () => setOpacity(null);
  }, [pathname]);

  return (
    <div className={`container ${opacity ? "opacity" : ""}`}>
      <NavLink className='item' to='./pages/01expanding-cards/'>Expanding Cards</NavLink>
      <NavLink className='item' to='./pages/02progress-steps/'>Progress Steps</NavLink>
      <NavLink className='item' to='./pages/03rotating-nav-animation/'>Rotating Nav Animation</NavLink>
      <NavLink className='item' to='./pages/04hidden-search/'>Hidden Search</NavLink>
      <NavLink className='item' to='./pages/05blurry-loading/'>Blurry Loading</NavLink>
      <NavLink className='item' to='./pages/06scroll-animation/'>Scroll Animation</NavLink>
      <NavLink className='item' to='./pages/07split-landing-page/'>Split Landing Page</NavLink>
      <NavLink className='item' to='./pages/08form-input-wave/'>Form Input Wave</NavLink>
      <NavLink className='item' to='./pages/09sound-board'>Sound Board</NavLink>
      <NavLink className='item' to='./pages/10-dad-jokes'>Dad jokes</NavLink>

      <NavLink className='item' to='./pages/11-event-keycodes'>Event keycodes</NavLink>
      <NavLink className='item' to='./pages/12-faq-collapse'>FAQ collapse</NavLink>
      <NavLink className='item' to='./pages/13-random-choice-picker'>Random Choice Picker</NavLink>
      <NavLink className='item' to='./pages/14-animated-navigation'>Animated Navigation</NavLink>
      <NavLink className='item' to='./pages/15-incrementing-counter'>Incrementing Counter</NavLink>
      <NavLink className='item' to='./pages/16-drink-water'>Drink Water</NavLink>
    </div>
  )
}

export default App;
