import { useEffect } from 'react';
import './LiveUserFilter.css';

export default function LiveUserFilter() {
  useEffect(() => {
    document.title = 'Live User Filter';
  }, []);

  return (
    <div className='body-42'>

    </div>);
}