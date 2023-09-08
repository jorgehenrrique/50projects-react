/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './VerifyAccountUi.css';

export default function VerifyAccountUi() {
  useEffect(() => {
    document.title = 'Verify Account Ui';
  }, []);

  let codes = [];
  useEffect(() => {
    codes = document.querySelectorAll('.code-41');
    codes[0].focus();
  }, []);

  const inputs = [];
  for (let i = 0; i < 6; i++) {
    inputs.push(<input
      key={i}
      type="number"
      className='code-41'
      onKeyDown={(e) => handleCodes(e, i)}
      placeholder="0" min="0" max="9" required />)
  }

  const handleCodes = (e, idx) => {
    if (e.key >= 0 && e.key <= 9) {
      e.target.value = '';
      if (idx === codes.length - 1) return;
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      if (idx === 0) return;
      setTimeout(() => codes[idx - 1].focus(), 10);
    } else if (isNaN(e.key)) {
      setTimeout(() => e.target.value = '', 1);
    }
  };

  return (
    <div className='body-41'>

      <div className="container-41">
        <h2>Verify Your Account</h2>
        <p>We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to confirm your email address.</p>
        <div className="code-container-41">
          {inputs}
        </div>
        <small>
          This is design only. We didn&#39;t actually send you an email as we don&#39;t have your email, right?
        </small>
      </div>

    </div>);
}