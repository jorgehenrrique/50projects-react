import { useEffect } from 'react';

export default function IncrementingCounter() {
  useEffect(() => {
    document.title = 'Increment Counter';
  }, []);

  return (
    <div className="body-15">
      <h1>Incrementing Counter</h1>
    </div>
  );
}