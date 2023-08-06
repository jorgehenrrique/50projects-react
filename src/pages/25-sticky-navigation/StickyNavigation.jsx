import { useEffect } from 'react';
import './StickyNavigation.css';

export default function StickyNavigation() {
  useEffect(() => {
    document.title = 'Sticky Navigation';
  }, []);

  return (
    <div className='body-25'>

    </div>
  );
}