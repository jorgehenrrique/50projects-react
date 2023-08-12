import { useEffect } from 'react';
import './ToastNotification.css';

export default function ToastNotification() {
  useEffect(() => {
    document.title = 'Toast Notification';
  }, []);

  return (
    <div className='body-27'>

    </div>
  );
}