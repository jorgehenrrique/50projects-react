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
      <NavLink className='item' to='./01expanding-cards/'>01-Expanding Cards</NavLink>
      <NavLink className='item' to='./02progress-steps/'>02-Progress Steps</NavLink>
      <NavLink className='item' to='./03rotating-nav-animation/'>03-Rotating Nav Animation</NavLink>
      <NavLink className='item' to='./04hidden-search/'>04-Hidden Search</NavLink>
      <NavLink className='item' to='./05blurry-loading/'>05-Blurry Loading</NavLink>
      <NavLink className='item' to='./06scroll-animation/'>06-Scroll Animation</NavLink>
      <NavLink className='item' to='./07split-landing-page/'>07-Split Landing Page</NavLink>
      <NavLink className='item' to='./08form-input-wave/'>08-Form Input Wave</NavLink>
      <NavLink className='item' to='./09sound-board'>09-Sound Board</NavLink>
      <NavLink className='item' to='./10-dad-jokes'>10-Dad jokes</NavLink>

      <NavLink className='item' to='./11-event-keycodes'>11-Event keycodes</NavLink>
      <NavLink className='item' to='./12-faq-collapse'>12-FAQ collapse</NavLink>
      <NavLink className='item' to='./13-random-choice-picker'>13-Random Choice Picker</NavLink>
      <NavLink className='item' to='./14-animated-navigation'>14-Animated Navigation</NavLink>
      <NavLink className='item' to='./15-incrementing-counter'>15-Incrementing Counter</NavLink>
      <NavLink className='item' to='./16-drink-water'>16-Drink Water</NavLink>
      <NavLink className='item' to='./17-movie-app'>17-Movie App</NavLink>
      <NavLink className='item' to='./18-background-slider'>18-Background Slider</NavLink>
      <NavLink className='item' to='./19-theme-clock'>19-Theme Clock</NavLink>
      <NavLink className='item' to='./20-button-ripple-effect'>20-Button Ripple Effect</NavLink>

      <NavLink className='item' to='./21-drag-n-drop'>21-Drag N Drop</NavLink>
      <NavLink className='item' to='./22-drawing-app'>22-Drawing App</NavLink>
      <NavLink className='item' to='./23-kinetic-loader'>23-Kinetic Loader</NavLink>
      <NavLink className='item' to='./24-content-placeholder'>24-Content Placeholder</NavLink>
      <NavLink className='item' to='./25-sticky-navigation'>25-Sticky Navigation</NavLink>
      <NavLink className='item' to='./26-double-vertical-slider'>26-Double Vertical Slider</NavLink>
      <NavLink className='item' to='./27-toast-notification'>27-Toast Notification</NavLink>
      <NavLink className='item' to='./28-github-profiles'>28-Github Profiles</NavLink>
      <NavLink className='item' to='./29-double-click-heart'>29-Double Click Heart</NavLink>
      <NavLink className='item' to='./30-auto-text-effect'>30-Auto Text Effect</NavLink>

      <NavLink className='item' to='./31-password-generator'>31-Password Generator</NavLink>
      <NavLink className='item' to='./32-good-cheap-fast'>32-Good Cheap Fast</NavLink>
      <NavLink className='item' to='./33-notes-app'>33-Notes App</NavLink>
      <NavLink className='item' to='./34-animated-countdown'>34-Animated Countdown</NavLink>
      <NavLink className='item' to='./35-image-carousel'>35-Image Carousel</NavLink>
      <NavLink className='item' to='./36-hoverboard'>36-Hoverboard</NavLink>
      <NavLink className='item' to='./37-pokedex'>37-Pokedex</NavLink>
      <NavLink className='item' to='./38-mobile-tab-navigation'>38-Mobile Tab Navigation</NavLink>
      <NavLink className='item' to='./39-password-strength-background'>39-Password Strength Background</NavLink>
      <NavLink className='item' to='./40-3d-boxes-background'>40-3D Background Boxes</NavLink>

      <NavLink className='item' to='./41-verify-account-ui'>41-Verify Account Ui</NavLink>
      <NavLink className='item' to='./42-live-user-filter'>42-Live User Filter</NavLink>
      <NavLink className='item' to='./43-feedback-ui-design'>43-Feedback Ui Design</NavLink>

    </div>
  )
}

export default App;
