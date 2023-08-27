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

      <NavLink className='item' to='./21-drag-n-drop'>Drag N Drop</NavLink>
      <NavLink className='item' to='./22-drawing-app'>Drawing App</NavLink>
      <NavLink className='item' to='./23-kinetic-loader'>Kinetic Loader</NavLink>
      <NavLink className='item' to='./24-content-placeholder'>Content Placeholder</NavLink>
      <NavLink className='item' to='./25-sticky-navigation'>Sticky Navigation</NavLink>
      <NavLink className='item' to='./26-double-vertical-slider'>Double Vertical Slider</NavLink>
      <NavLink className='item' to='./27-toast-notification'>Toast Notification</NavLink>
      <NavLink className='item' to='./28-github-profiles'>Github Profiles</NavLink>
      <NavLink className='item' to='./29-double-click-heart'>Double Click Heart</NavLink>
      <NavLink className='item' to='./30-auto-text-effect'>Auto Text Effect</NavLink>

      <NavLink className='item' to='./31-password-generator'>Password Generator</NavLink>
      <NavLink className='item' to='./32-good-cheap-fast'>Good Cheap Fast</NavLink>

    </div>
  )
}

export default App;
