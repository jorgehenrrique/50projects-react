import './styles/reset.css';
import './styles/App.css';
import { NavLink } from 'react-router-dom';

function App() {
  document.title = '50projects react';

  return (
    <div className="container">
      <NavLink className='item' to='./pages/01expanding-cards/'>Expanding Cards</NavLink>
      <NavLink className='item' to='./pages/02progress-steps/'>Progress Steps</NavLink>
      <NavLink className='item' to='./pages/03rotating-nav-animation/'>Rotating Nav Animation</NavLink>
      <NavLink className='item' to='./pages/04hidden-search/'>Hidden Search</NavLink>
      <NavLink className='item' to='./pages/05blurry-loading/'>Blurry Loading</NavLink>
      <NavLink className='item' to='./pages/06scroll-animation/'>Scroll Animation</NavLink>
      <NavLink className='item' to='./pages/07split-landing-page/'>Split Landing Page</NavLink>
      <NavLink className='item' to='./pages/08form-input-wave/'>Form Input Wave</NavLink>
    </div>
  )
}

export default App;
