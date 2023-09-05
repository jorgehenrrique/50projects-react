import { useEffect, useRef, useState } from 'react';
import './PasswordStrengthBackground.css';

export default function PasswordStrengthBackground() {
  useEffect(() => {
    document.title = 'Password Strength Background';
  }, []);

  const [blur, setBlur] = useState('20px');
  const passwordRef = useRef();

  const handlePassword = () => {
    const length = passwordRef.current.value.trim().length;
    const blurValue = 20 - length * 2;
    setBlur(`${blurValue}px`);
  };

  return (
    <div className='body-39'>

      <div className="background-39" style={{ filter: `blur(${blur})` }}></div>
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
          <input type="password" id="password" ref={passwordRef}
            placeholder="Enter Password" onChange={handlePassword} />
        </div>
        <button type="submit">Submit</button>
      </div>

    </div>);
}