import { useEffect } from 'react';

export default function AnimatedNavigation() {
  useEffect(() => {
    document.title = 'Animated Navigation';
  }, []);


  return (
    <div className="body-14">
      <h1>14-animated-navigation</h1>
    </div>
  );
}