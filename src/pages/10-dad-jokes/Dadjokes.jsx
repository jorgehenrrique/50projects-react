import { useEffect, useState } from 'react';
import './Dadjokes.css';

export default function Dadjokes() {
  useEffect(() => {
    document.title = 'Dad jokes';
  }, []);

  const [joke, setJoke] = useState(null);

  function generateJoke() {
    fetch('https://icanhazdadjoke.com', {
      headers: {
        Accept: 'application/json',
      },
    }).then((response) => {
      if (response.ok && response.status === 200) { return response.json(); }
      else { throw new Error('Servidor indisponível'); }
    }).then((response) => {
      setJoke(response.joke);
    }).catch((error) => {
      setJoke(error.message);
    });
  }

  useEffect(() => {
    setJoke('Clique em: Gerar outra piada.');
    generateJoke();

    return (() => {
      setJoke(null);
    });
  }, []);

  return (
    <div className="body-10">
      <div className="container-10">
        <h1>Desafio não ria</h1>
        <strong>{joke}</strong>
        <button onClick={generateJoke}>Gerar outra piada</button>
      </div>
    </div >
  );
}
