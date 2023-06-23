import { useEffect, useRef, useState } from 'react';
import './RandomChoicePicker.css';

export default function RandomChoicePicker() {
  useEffect(() => {
    document.title = 'Random Choice Picker';
  }, []);

  const [tags, setTag] = useState([]);
  const [rand, setRand] = useState(null);
  const onEnter = useRef();

  function createTags(e) {
    setTag(e.trim().split(',').filter(t => t.trim() !== ''));
  }

  function randomSelect(e) {
    if (e.key === 'Enter') {
      onEnter.current.value = '';
      setRand(Math.floor(Math.random() * tags.length));
      console.log(rand);
    }
  }

  return (
    <div className="body-13">
      <div className="container-13">
        <h3>{`Digite todas as opções divididas por uma vírgula (',').`}</h3>
        <h3>Pressione enter quando terminar</h3>

        <textarea placeholder="Insira as opções aqui..."
          onChange={(e) => createTags(e.target.value)}
          onKeyUp={(e) => randomSelect(e)}
          ref={onEnter}></textarea>

        <div id="tags">
          {tags.map((tag, idx) => {
            return (
              <span key={idx} className={`tag ${rand === idx ? 'highlight' : ''}`}>{tag}</span>
            )
          })}
        </div>
      </div >
    </div>
  );
}
