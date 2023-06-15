import { useEffect } from 'react';
import './SplitLandingPage.css';

export default function SplitLandingPage() {
  useEffect(() => {
    document.title = 'Split Landing Page';
  }, []);
  return (
    <h1>Split Landing Page</h1>
  );
}