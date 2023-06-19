import { useEffect } from 'react';
import './Eventkeycodes.css';

export default function Eventkeycodes() {
  useEffect(() => {
    document.title = 'Event keycodes';
  }, []);


  return (
    <div className="body-11">
      <h1>Event keycodes</h1>
    </div >
  );
}
