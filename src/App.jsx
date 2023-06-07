import './styles/reset.css';
import './styles/App.css';
import { NavLink } from 'react-router-dom';

function App() {

  return (
    <div className="container">
      <h1>Oi</h1>
      <NavLink className='item' to='./pages/01expanding-cards/'>ExpandingCards</NavLink>
      <NavLink className='item' to='./pages/02progress-steps/'>ProgressSteps</NavLink>
      <NavLink className='item' to='./pages/03rotating-nav-animation/'>RotatingNavAnimation</NavLink>
      <NavLink className='item' to='./pages/04hidden-search/'>HiddenSearch</NavLink>
      <NavLink className='item' to='./pages/05blurry-loading/'>BlurryLoading</NavLink>
      <NavLink className='item' to='./pages/06scroll-animation/'>ScrollAnimation</NavLink>
      <NavLink className='item' to='./pages/07split-landing-page/'>SplitLandingPage</NavLink>
      <NavLink className='item' to='./pages/08form-input-wave/'>FormInputWave</NavLink>
    </div>
  )
}

export default App;
