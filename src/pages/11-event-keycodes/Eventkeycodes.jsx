import { useEffect, useState } from 'react';
import './Eventkeycodes.css';

export default function Eventkeycodes() {
  useEffect(() => {
    document.title = 'Event keycodes';
  }, []);

  const [press, setPress] = useState(false);
  const [key, setKey] = useState(null);

  const handleKey = (event) => {
    setPress(true);
    setKey(event);
  };

  useEffect(() => {
    return () => {
      setPress(false);
      setKey(null);
    };
  }, []);

  return (
    <div className="body-11" onKeyPress={(e) => handleKey(e)} tabIndex={0}>
      <div className="container-11">
        {!press && <p>Press any key to get the keyCode</p>}
        {press &&
          <>
            <div>
              event.key
              <small>{`${key.key === ' ' ? 'Space' : key.key}`}</small>
            </div>
            <div>
              event.which
              <small>{`${key.which}`}</small>
              {/* O código .keyCode foi descontinuado e não é mais recomendado para obter o código da tecla pressionada.
              Em vez disso, você pode usar a propriedade event.which para obter o código da tecla pressionada. */}
            </div>
            <div>
              event.code
              <small>{`${key.code}`}</small>
            </div>
          </>}
      </div>
    </div >
  );
}
