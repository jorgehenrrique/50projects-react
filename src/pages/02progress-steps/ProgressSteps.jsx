import { useState } from 'react';
import './ProgressSteps.css';

export default function ProgressSteps() {
  let [stap, setStap] = useState(0);
  const [active, setActive] = useState([{
    active: true,
  },
  {
    active: false,
  },
  {
    active: false,
  },
  {
    active: false
  }
  ]);

  const prev = () => {
    if (stap >= 0 && stap <= 3) {
      setStap(--stap);
      console.log('indice', stap);

      // ALTERNATIVA
      // setActive(active => {
      //   return active.map((item, index) => {
      //     if (index === stap + 1) {
      //       return {
      //         ...item,
      //         active: false
      //       };
      //     } else {
      //       return item;
      //     }
      //   });
      // });

      setActive(prevActive => {
        const newActive = [...prevActive];
        newActive[stap + 1].active = false;
        return newActive;
      });
    }
  };


  const next = () => {
    if (stap >= 0 && stap <= 3) {
      setStap(++stap);
      console.log('indice', stap);

      // ALTERNATIVA
      // setActive(active => {
      //   return active.map((item, index) => {
      //     if (index === stap) {
      //       return {
      //         ...item,
      //         active: true
      //       };
      //     } else {
      //       return item;
      //     }
      //   });
      // });

      setActive(prevActive => {
        const newActive = [...prevActive];
        newActive[stap].active = true;
        return newActive;
      });
    }
  };


  console.log('indice g: ', stap);
  return (
    <div className="container-02">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        {active.map((active, index) => {
          return (
            <div className={`circle ${active.active ? "active" : ""}`}
              key={index}>{index + 1}</div>
          )
        })}
      </div>

      <div>
        <button className="btn" id="prev"
          onClick={prev} disabled={stap <= 0} >Prev</button>
        <button className="btn" id="next"
          onClick={next} disabled={stap >= 3}>Next</button>
      </div>
    </div>
  );
}