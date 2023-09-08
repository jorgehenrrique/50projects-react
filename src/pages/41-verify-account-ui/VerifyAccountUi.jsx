import { useEffect } from 'react';
import './VerifyAccountUi.css';

export default function VerifyAccountUi() {
  useEffect(() => {
    document.title = 'Verify Account Ui';
  }, []);

  return (
    <div className='body-41'>

      <div className="container-41">
        <h2>Verify Your Account</h2>
        <p>We emailed you the six digit code to cool_guy@email.com <br /> Enter the code below to confirm your email address.</p>

        <div className="code-container-41">
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
          <input type="number" className="code-41" placeholder="0" min="0" max="9" required />
        </div>

        <small>
          This is design only. We didn&#39;t actually send you an email as we don&#39;t have your email, right?
        </small>
      </div>

    </div>);
}