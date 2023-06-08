import { useState } from 'react';
import './ProgressSteps.css';

export default function ProgressSteps() {
  let [step, setStep] = useState(0);
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
    if (step >= 0 && step <= 3) {
      setStep(--step);

      setActive(prevActive => {
        const newActive = [...prevActive];
        newActive[step + 1].active = false;
        return newActive;
      });

      // ALTERNATIVA
      // setActive(active => {
      //   return active.map((item, index) => {
      //     if (index === step + 1) {
      //       return {
      //         ...item,
      //         active: false
      //       };
      //     } else {
      //       return item;
      //     }
      //   });
      // });
    }
  };


  const next = () => {
    if (step >= 0 && step <= 3) {
      setStep(++step);

      setActive(prevActive => {
        const newActive = [...prevActive];
        newActive[step].active = true;
        return newActive;
      });

      // ALTERNATIVA
      // setActive(active => {
      //   return active.map((item, index) => {
      //     if (index === step) {
      //       return {
      //         ...item,
      //         active: true
      //       };
      //     } else {
      //       return item;
      //     }
      //   });
      // });
    }
  };

  // Calcular a largura de progresso
  const width = () => {
    const progressWidth = `${step / (active.length - 1) * 100}%`;
    return progressWidth;
  }

  return (
    <div className="container-02">
      <div className="progress-container">
        <div className="progress" style={{ width: width() }}></div>
        {active.map((active, index) => {
          return (
            <div className={`circle ${active.active ? "active" : ""}`}
              key={index}>{index + 1}</div>)
        })}
      </div>

      <div>
        <button className="btn" onClick={prev}
          disabled={step <= 0} >Prev</button>
        <button className="btn" onClick={next}
          disabled={step >= 3}>Next</button>
      </div>
    </div>
  );
}