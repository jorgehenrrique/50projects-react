import { useEffect } from 'react';
import './cssName.css';

export default function Component() {
  useEffect(() => {
    document.title = 'PageName';
  }, []);

  return (
    <div className='body-31'>

    </div>
  );
}