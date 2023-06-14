import { useEffect } from 'react';

export default function SplitLandingPage() {
  useEffect(() => {
    document.title = 'Split Landing Page';
  }, []);
  return (
    <h1>Split Landing Page</h1>
  );
}