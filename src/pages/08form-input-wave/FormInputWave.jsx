import { useEffect } from 'react';
import './FormInputWave.css';

export default function FormInputWave() {
  useEffect(() => {
    document.title = 'Form Input Wave';
  }, []);


  return (
    <div className="container-08">
      <form className="form08">
        <h1>Login</h1>
        <div className="form-control08">
          <input type="text" required />
          <label>Email</label>
        </div>

        <div className="form-control08">
          <input type="password" required />
          <label>Password</label>
        </div>

        <button className='btn08'>Login</button>
        <p className="text08">Não tem uma conta? <a href="#">Registrar</a></p>
      </form>

    </div>
  );
}