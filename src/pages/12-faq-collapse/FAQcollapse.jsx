import { useEffect } from 'react';
import './FAQcollapse.css';

export default function FAQcollapse() {
  useEffect(() => {
    document.title = 'FAQ collapse';
  }, []);

  return (
    <div className="body-12">
      <div className="container-12">
        <h1>Frequently Asked Questions</h1>
      </div >
    </div>
  );
}
