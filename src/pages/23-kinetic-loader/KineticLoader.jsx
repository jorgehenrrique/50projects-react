import { useEffect } from 'react';
import './KineticLoader.css';

export default function KineticLoader() {
  useEffect(() => {
    document.title = 'Kinetic Loader';
  }, []);

  return (
    <div className='body-23'>

    </div>
  );
}