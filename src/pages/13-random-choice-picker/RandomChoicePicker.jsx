import { useEffect, useRef, useState } from 'react';
import './RandomChoicePicker.css';

export default function RandomChoicePicker() {
  useEffect(() => {
    document.title = 'Random Choice Picker';
  }, []);

  const [tags, setTag] = useState([]);
  const [rand, setRand] = useState(null);
  const [count, setCount] = useState(0);
  const onEnter = useRef();

  useEffect(() => {
    if (tags.length >= 2 && count <= 30) {
      setTimeout(() => {
        setRand(Math.floor(Math.random() * tags.length));
        setCount(count + 1);
      }, 150);
    }
  }, [count, tags]);

  function createTags(e) {
    setTag(e.trim().split(',').filter(t => t.trim() !== ''));
  }

  function randomSelect(e) {
    if (e.key === 'Enter') {
      if (onEnter.current.value.trim() === '') {
        return;
      }
      onEnter.current.value = '';
      setCount(1);
      console.log(rand);
      console.log(count);
    }
  }
  console.log(rand);
  console.log(count);
  return (
    <div className="body-13">
      <div className="container-13">
        <h3>{`Digite todas as opções divididas por uma vírgula (',').`}</h3>
        <h3>Pressione enter quando terminar</h3>

        <textarea placeholder="Insira as opções aqui..."
          onChange={(e) => createTags(e.target.value)}
          onKeyUp={(e) => randomSelect(e)}
          ref={onEnter}></textarea>

        <div className="tags">
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
