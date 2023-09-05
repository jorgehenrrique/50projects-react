import { useEffect } from 'react';
import './PasswordStrengthBackground.css';

export default function PasswordStrengthBackground() {
  useEffect(() => {
    document.title = 'Password Strength Background';
  }, []);

  return (
    <div className='body-39'>

      <div className="background-39"></div>
      <div className="form-box-39">
        <div>
          <h1>Image Password Strength</h1>
          <p>Change the password to see the effect</p>
        </div>

        <div className="inputs-39">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder="Enter Email" />
        </div>

        <div className="inputs-39">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Enter Password" />
        </div>

        <button type="submit">Submit</button>
      </div>

    </div>);
}