import { useEffect, useState } from 'react';
import './PasswordGenerator.css';

export default function PasswordGenerator() {
  useEffect(() => {
    document.title = 'Password Generator';
  }, []);

  const [result, setResult] = useState('');
  const [pLength, setPLength] = useState(20);

  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  const handleGenerate = () => {
    const length = pLength;
    const hasUpper = includeUppercase
    const hasLower = includeLowercase
    const hasNumber = includeNumbers
    const hasSymbol = includeSymbols

    generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
  };

  function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = ''
    const typesCount = lower + upper + number + symbol
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typesCount === 0) {
      return ''
    }

    for (let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0]
        generatedPassword += randomFunc[funcName]()
      })
    }

    const finalPassword = generatedPassword.slice(0, length)

    return setResult(finalPassword);
  }

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      alert('Password copied to clipboard!')
    }
    return;
  };


  return (
    <div className='body-31'>

      <div className="container-31">
        <h2>Password Generator</h2>

        <div className="result-container-31">
          <span>{result}</span>
          <button onClick={handleCopy}>🗒️</button>
        </div>

        <div className="settings-31">
          <div className="setting-31">
            <label htmlFor='length'>Password Length</label>
            <input type="number" id="length" min="4" max="20" value={pLength}
              onChange={(e) => setPLength(e.target.value)} />
          </div>

          <div className="setting-31">
            <label htmlFor='uppercase'>Include uppercase letters</label>
            <input type="checkbox" id="uppercase"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)} />
          </div>

          <div className="setting-31">
            <label htmlFor='lowercase'>Include lowercase letters</label>
            <input type="checkbox" id="lowercase"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)} />
          </div>

          <div className="setting-31">
            <label htmlFor='numbers'>Include numbers</label>
            <input type="checkbox" id="numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)} />
          </div>

          <div className="setting-31">
            <label htmlFor='symbols'>Include symbols</label>
            <input type="checkbox" id="symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)} />
          </div>
        </div>

        <button className="btn-large-31" onClick={handleGenerate}>
          Generate Password
        </button>
      </div>

    </div>
  );
}