import { useEffect, useRef } from 'react';
import './FormInputWave.css';

export default function FormInputWave() {
  useEffect(() => {
    document.title = 'Form Input Wave';
  }, []);

  const labelsRef = useRef([]);

  useEffect(() => {
    labelsRef.current.forEach((label) => {
      const letters = label.textContent.split('');

      const updatedContent = letters.map((letter, idx) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.transitionDelay = `${idx * 50}ms`;
        return span;
      });

      label.textContent = '';
      updatedContent.forEach((letter) => label.appendChild(letter));
    });
  }, []);

  return (
    <div className="container-08">
      <form className="form08">
        <h1>Login</h1>
        <div className="form-control08">
          <input type="text" required />
          <label ref={(el) => (labelsRef.current[0] = el)}>Email</label>
        </div>

        <div className="form-control08">
          <input type="password" required />
          <label ref={(el) => (labelsRef.current[1] = el)}>Password</label>
        </div>

        <button className='btn08'>Login</button>
        <p className="text08">Não tem uma conta? <a href="#">Registrar</a></p>
      </form>

    </div>
  );
}