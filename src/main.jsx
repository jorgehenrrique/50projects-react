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
import MovieApp from './pages/17-movie-app/MovieApp.jsx';
import BackgroundSlider from './pages/18-background-slider/BackgroundSlider.jsx';
import ThemeClock from './pages/19-theme-clock/ThemeClock.jsx';
import ButtonRippleEffect from './pages/20-button-ripple-effect/ButtonRippleEffect.jsx';
import DragNDrop from './pages/21-drag-n-drop/DragNDrop.jsx';
import DrawingApp from './pages/22-drawing-app/DrawingApp.jsx';
import KineticLoader from './pages/23-kinetic-loader/KineticLoader.jsx';
import ContentPlaceholder from './pages/24-content-placeholder/ContentPlaceholder.jsx';
import StickyNavigation from './pages/25-sticky-navigation/StickyNavigation.jsx';
import DoubleVerticalSlider from './pages/26-double-vertical-slider/DoubleVerticalSlider.jsx';
import ToastNotification from './pages/27-toast-notification/ToastNotification.jsx';
import GithubProfiles from './pages/28-github-profiles/GithubProfiles.jsx';
import DoubleClickHeart from './pages/29-double-click-heart/DoubleClickHeart.jsx';
import AutoTextEffect from './pages/30-auto-text-effect/AutoTextEffect.jsx';
import PasswordGenerator from './pages/31-password-generator/PasswordGenerator.jsx';
import GoodCheapFast from './pages/32-good-cheap-fast/GoodCheapFast.jsx';
import NotesApp from './pages/33-notes-app/NotesApp.jsx';
import AnimatedCountdown from './pages/34-animated-countdown/AnimatedCountdown.jsx';
import ImageCarousel from './pages/35-image-carousel/ImageCarousel.jsx';
import Hoverboard from './pages/36-hoverboard/Hoverboard.jsx';
import Pokedex from './pages/37-pokedex/Pokedex.jsx';
import MobileTabNavigation from './pages/38-mobile-tab-navigation/MobileTabNavigation.jsx';
import PasswordStrengthBackground from './pages/39-password-strength-background/PasswordStrengthBackground.jsx';
import BackgroundBoxes3D from './pages/40-3d-boxes-background/3dBackgroundBoxes.jsx';
import VerifyAccountUi from './pages/41-verify-account-ui/VerifyAccountUi.jsx';
import LiveUserFilter from './pages/42-live-user-filter/LiveUserFilter.jsx';
import FeedbackUiDesign from './pages/43-feedback-ui-design/FeedbackUiDesign.jsx';
import CustomRangeSlider from './pages/44-custom-range-slider/CustomRangeSlider.jsx';
import NetflixMobileNavigation from './pages/45-netflix-mobile-navigation/NetflixMobileNavigation.jsx';
import QuizApp from './pages/46-quiz-app/QuizApp.jsx';
import TestimonialBoxSwitcher from './pages/47-testimonial-box-switcher/TestimonialBoxSwitcher.jsx';
import RandomImageFeed from './pages/48-random-image-generator/RandomImageFeed.jsx';
import TodoList from './pages/49-todo-list/TodoList.jsx';
import InsectCatchGame from './pages/50-insect-catch-game/InsectCatchGame.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <BackHome />
    <Routes>
      <Route index path='/50projects-react' element={<App />} />
      <Route path='/50projects-react/01expanding-cards' element={<ExpandingCards />} />
      <Route path='/50projects-react/02progress-steps' element={<ProgressSteps />} />
      <Route path='/50projects-react/03rotating-nav-animation' element={<RotatingNavAnimation />} />
      <Route path='/50projects-react/04hidden-search' element={<HiddenSearch />} />
      <Route path='/50projects-react/05blurry-loading' element={<BlurryLoading />} />
      <Route path='/50projects-react/06scroll-animation' element={<ScrollAnimation />} />
      <Route path='/50projects-react/07split-landing-page' element={<SplitLandingPage />} />
      <Route path='/50projects-react/08form-input-wave' element={<FormInputWave />} />
      <Route path='/50projects-react/09sound-board' element={<SoundBoard />} />
      <Route path='/50projects-react/10-dad-jokes' element={<Dadjokes />} />

      <Route path='/50projects-react/11-event-keycodes' element={<Eventkeycodes />} />
      <Route path='/50projects-react/12-faq-collapse' element={<FAQcollapse />} />
      <Route path='/50projects-react/13-random-choice-picker' element={<RandomChoicePicker />} />
      <Route path='/50projects-react/14-animated-navigation' element={<AnimatedNavigation />} />
      <Route path='/50projects-react/15-incrementing-counter' element={<IncrementingCounter />} />
      <Route path='/50projects-react/16-drink-water' element={<DrinkWater />} />
      <Route path='/50projects-react/17-movie-app' element={<MovieApp />} />
      <Route path='/50projects-react/18-background-slider' element={<BackgroundSlider />} />
      <Route path='/50projects-react/19-theme-clock' element={<ThemeClock />} />
      <Route path='/50projects-react/20-button-ripple-effect' element={<ButtonRippleEffect />} />

      <Route path='/50projects-react/21-drag-n-drop' element={<DragNDrop />} />
      <Route path='/50projects-react/22-drawing-app' element={<DrawingApp />} />
      <Route path='/50projects-react/23-kinetic-loader' element={<KineticLoader />} />
      <Route path='/50projects-react/24-content-placeholder' element={<ContentPlaceholder />} />
      <Route path='/50projects-react/25-sticky-navigation' element={<StickyNavigation />} />
      <Route path='/50projects-react/26-double-vertical-slider' element={<DoubleVerticalSlider />} />
      <Route path='/50projects-react/27-toast-notification' element={<ToastNotification />} />
      <Route path='/50projects-react/28-github-profiles' element={<GithubProfiles />} />
      <Route path='/50projects-react/29-double-click-heart' element={<DoubleClickHeart />} />
      <Route path='/50projects-react/30-auto-text-effect' element={<AutoTextEffect />} />

      <Route path='/50projects-react/31-password-generator' element={<PasswordGenerator />} />
      <Route path='/50projects-react/32-good-cheap-fast' element={<GoodCheapFast />} />
      <Route path='/50projects-react/33-notes-app' element={<NotesApp />} />
      <Route path='/50projects-react/34-animated-countdown' element={<AnimatedCountdown />} />
      <Route path='/50projects-react/35-image-carousel' element={<ImageCarousel />} />
      <Route path='/50projects-react/36-hoverboard' element={<Hoverboard />} />
      <Route path='/50projects-react/37-pokedex' element={<Pokedex />} />
      <Route path='/50projects-react/38-mobile-tab-navigation' element={<MobileTabNavigation />} />
      <Route path='/50projects-react/39-password-strength-background' element={<PasswordStrengthBackground />} />
      <Route path='/50projects-react/40-3d-boxes-background' element={<BackgroundBoxes3D />} />

      <Route path='/50projects-react/41-verify-account-ui' element={<VerifyAccountUi />} />
      <Route path='/50projects-react/42-live-user-filter' element={<LiveUserFilter />} />
      <Route path='/50projects-react/43-feedback-ui-design' element={<FeedbackUiDesign />} />
      <Route path='/50projects-react/44-custom-range-slider' element={<CustomRangeSlider />} />
      <Route path='/50projects-react/45-netflix-mobile-navigation' element={<NetflixMobileNavigation />} />
      <Route path='/50projects-react/46-quiz-app' element={<QuizApp />} />
      <Route path='/50projects-react/47-testimonial-box-switcher' element={<TestimonialBoxSwitcher />} />
      <Route path='/50projects-react/48-random-image-generator' element={<RandomImageFeed />} />
      <Route path='/50projects-react/49-todo-list' element={<TodoList />} />
      <Route path='/50projects-react/50-insect-catch-game' element={<InsectCatchGame />} />

      <Route path='*' element={<App />} />
    </Routes>
  </BrowserRouter>
)
