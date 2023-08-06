import { useEffect } from 'react';
import './ContentPlaceholder.css';

export default function ContentPlaceholder() {
  useEffect(() => {
    document.title = 'Content Placeholder';
  }, []);

  return (
    <div className='body-24'>

    </div>
  );
}