import { useEffect, useState } from 'react';
import './ToastNotification.css';

export default function ToastNotification() {
  useEffect(() => {
    document.title = 'Toast Notification';
  }, []);

  const [notifications, setNotifications] = useState([]);

  const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
  ];

  const types = ['info', 'success', 'error'];

  const handleNotification = () => {
    const newMessage = messages[Math.floor(Math.random() * messages.length)];
    const newType = types[Math.floor(Math.random() * types.length)];

    const newNotification = {
      id: new Date().getTime(),
      message: newMessage,
      type: newType,
    };

    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);

    setTimeout(() => {
      removeNotification(newNotification.id);
    }, 3000);
  };

  const removeNotification = (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== notificationId)
    );
  };

  return (
    <div className='body-27'>
      <div className='toasts-container-27'>
        {notifications.map((notification) => (
          <div key={notification.id} className={`toasts-27 ${notification.type}`}>
            {notification.message}
          </div>
        ))}
      </div>
      <button onClick={handleNotification}>Show Notification</button>
    </div >
  );
}
