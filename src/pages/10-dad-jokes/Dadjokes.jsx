import { useEffect } from 'react';
import './Dadjokes.css';

export default function Dadjokes() {
  useEffect(() => {
    document.title = 'Dad jokes';
  }, []);

  return (
    <div className="container-10">
      <h1>Dad jokes</h1>
    </div >
  );
}
