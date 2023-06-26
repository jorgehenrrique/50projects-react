import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';
import ExpandingCards from './pages/01expanding-cards/ExpandingCards';
import ProgressSteps from './pages/02progress-steps/ProgressSteps';
import RotatingNavAnimation from './pages/03rotating-nav-animation/RotatingNavAnimation';
import HiddenSearch from './pages/04hidden-search/HiddenSearch';
import BlurryLoading from './pages/05blurry-loading/BlurryLoading';
import ScrollAnimation from './pages/06scroll-animation/ScrollAnimation';
import SplitLandingPage from './pages/07split-landing-page/SplitLandingPage';
import FormInputWave from './pages/08form-input-wave/FormInputWave';
import BackHome from './components/backhome/BackHome';
import SoundBoard from './pages/09sound-board/SoundBoard.jsx';
import Dadjokes from './pages/10-dad-jokes/Dadjokes.jsx';
import Eventkeycodes from './pages/11-event-keycodes/Eventkeycodes.jsx';
import FAQcollapse from './pages/12-faq-collapse/FAQcollapse.jsx';
import RandomChoicePicker from './pages/13-random-choice-picker/RandomChoicePicker.jsx';
import AnimatedNavigation from './pages/14-animated-navigation/AnimatedNavigation.jsx';
import IncrementingCounter from './pages/15-incrementing-counter/IncrementingCounter.jsx';
import DrinkWater from './pages/16-drink-water/DrinkWater.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BackHome />
    <Routes>
      <Route index path='/50projects-react' element={<App />} />
      <Route path='/50projects-react/pages/01expanding-cards' element={<ExpandingCards />} />
      <Route path='/50projects-react/pages/02progress-steps' element={<ProgressSteps />} />
      <Route path='/50projects-react/pages/03rotating-nav-animation' element={<RotatingNavAnimation />} />
      <Route path='/50projects-react/pages/04hidden-search' element={<HiddenSearch />} />
      <Route path='/50projects-react/pages/05blurry-loading' element={<BlurryLoading />} />
      <Route path='/50projects-react/pages/06scroll-animation' element={<ScrollAnimation />} />
      <Route path='/50projects-react/pages/07split-landing-page' element={<SplitLandingPage />} />
      <Route path='/50projects-react/pages/08form-input-wave' element={<FormInputWave />} />
      <Route path='/50projects-react/pages/09sound-board' element={<SoundBoard />} />
      <Route path='/50projects-react/pages/10-dad-jokes' element={<Dadjokes />} />

      <Route path='/50projects-react/pages/11-event-keycodes' element={<Eventkeycodes />} />
      <Route path='/50projects-react/pages/12-faq-collapse' element={<FAQcollapse />} />
      <Route path='/50projects-react/pages/13-random-choice-picker' element={<RandomChoicePicker />} />
      <Route path='/50projects-react/pages/14-animated-navigation' element={<AnimatedNavigation />} />
      <Route path='/50projects-react/pages/15-incrementing-counter' element={<IncrementingCounter />} />
      <Route path='/50projects-react/pages/16-drink-water' element={<DrinkWater />} />
      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
