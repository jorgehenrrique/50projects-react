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
      <NavLink className='item' to='./01expanding-cards/'>Expanding Cards</NavLink>
      <NavLink className='item' to='./02progress-steps/'>Progress Steps</NavLink>
      <NavLink className='item' to='./03rotating-nav-animation/'>Rotating Nav Animation</NavLink>
      <NavLink className='item' to='./04hidden-search/'>Hidden Search</NavLink>
      <NavLink className='item' to='./05blurry-loading/'>Blurry Loading</NavLink>
      <NavLink className='item' to='./06scroll-animation/'>Scroll Animation</NavLink>
      <NavLink className='item' to='./07split-landing-page/'>Split Landing Page</NavLink>
      <NavLink className='item' to='./08form-input-wave/'>Form Input Wave</NavLink>
      <NavLink className='item' to='./09sound-board'>Sound Board</NavLink>
      <NavLink className='item' to='./10-dad-jokes'>Dad jokes</NavLink>

      <NavLink className='item' to='./11-event-keycodes'>Event keycodes</NavLink>
      <NavLink className='item' to='./12-faq-collapse'>FAQ collapse</NavLink>
      <NavLink className='item' to='./13-random-choice-picker'>Random Choice Picker</NavLink>
      <NavLink className='item' to='./14-animated-navigation'>Animated Navigation</NavLink>
      <NavLink className='item' to='./15-incrementing-counter'>Incrementing Counter</NavLink>
      <NavLink className='item' to='./16-drink-water'>Drink Water</NavLink>
      <NavLink className='item' to='./17-movie-app'>Movie App</NavLink>
      <NavLink className='item' to='./18-background-slider'>Background Slider</NavLink>
      <NavLink className='item' to='./19-theme-clock'>Theme Clock</NavLink>
      <NavLink className='item' to='./20-button-ripple-effect'>Button Ripple Effect</NavLink>


    </div>
  )
}

export default App;
