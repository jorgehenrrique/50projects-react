import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ExpandingCards from './pages/01expanding-cards/ExpandingCards';
import ProgressSteps from './pages/02progress-steps/ProgressSteps';
import RotatingNavAnimation from './pages/03rotating-nav-animation/RotatingNavAnimation';
import HiddenSearch from './pages/04hidden-search/HiddenSearch';
import BlurryLoading from './pages/05blurry-loading/BlurryLoading';
import ScrollAnimation from './pages/06scroll-animation/ScrollAnimation';
import SplitLandingPage from './pages/07split-landing-page/SplitLandingPage';
import FormInputWave from './pages/08form-input-wave/FormInputWave';
import './styles/reset.css';
import BackHome from './components/BackHome';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BackHome />
    <Routes>
      <Route path='*' element={<App />} />
      <Route path='/50projects-react' element={<App />} />
      <Route path='/50projects-react/pages/01expanding-cards' element={<ExpandingCards />} />
      <Route path='/50projects-react/pages/02progress-steps' element={<ProgressSteps />} />
      <Route path='/50projects-react/pages/03rotating-nav-animation' element={<RotatingNavAnimation />} />
      <Route path='/50projects-react/pages/04hidden-search' element={<HiddenSearch />} />
      <Route path='/50projects-react/pages/05blurry-loading' element={<BlurryLoading />} />
      <Route path='/50projects-react/pages/06scroll-animation' element={<ScrollAnimation />} />
      <Route path='/50projects-react/pages/07split-landing-page' element={<SplitLandingPage />} />
      <Route path='/50projects-react/pages/08form-input-wave' element={<FormInputWave />} />
    </Routes>
  </BrowserRouter>
)
