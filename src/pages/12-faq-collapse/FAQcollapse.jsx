import { useEffect } from 'react';
import './FAQcollapse.css';

export default function FAQcollapse() {
  useEffect(() => {
    document.title = 'FAQ collapse';
  }, []);

  return (
    <div className="body-12">
      <h1>FAQ collapse</h1>
    </div >
  );
}
