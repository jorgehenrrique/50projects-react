import { useEffect } from 'react';
import './AutoTextEffect.css';

export default function AutoTextEffect() {
  useEffect(() => {
    document.title = 'Auto Text Effect';
  }, []);

  return (
    <div className='body-30'>

    </div>);
}