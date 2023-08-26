import { useEffect } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
  useEffect(() => {
    document.title = 'Password Generator';
  }, []);

  return (
    <div className='body-31'>

      <div className="container-31">
        <h2>Password Generator</h2>

        <div className="result-container-31">
          <span id="result">testefdsfdsfdfsfsdfsdfsdfdsfdsfdsfdfsfsdfsdfsfdsfdsfdsfsdfdsfsdfdsfsdfdsdfdsfdsfsdfsfdsfdsfdsfdsfsfs</span>
          <button id="clipboard">
            🗒️
          </button>
        </div>

        <div className="settings-31">
          <div className="setting-31">
            <label>Password Length</label>
            <input type="number" id="length" min="4" max="20" value="20" />
          </div>

          <div className="setting-31">
            <label>Include uppercase letters</label>
            <input type="checkbox" id="uppercase" checked />
          </div>

          <div className="setting-31">
            <label>Include lowercase letters</label>
            <input type="checkbox" id="lowercase" checked />
          </div>

          <div className="setting-31">
            <label>Include numbers</label>
            <input type="checkbox" id="numbers" checked />
          </div>

          <div className="setting-31">
            <label>Include symbols</label>
            <input type="checkbox" id="symbols" checked />
          </div>
        </div>

        <button className="btn-large-31" id="generate">
          Generate Password
        </button>
      </div>

    </div>
  );
}