import { useEffect, useState } from 'react';
import './FeedbackUiDesign.css';

const ratings = [
  {
    src: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png',
    msg: 'Unhappy'
  },
  {
    src: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png',
    msg: 'Neutral'
  },
  {
    src: 'https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png',
    msg: 'Satisfied'
  },
];

export default function FeedbackUiDesign() {
  useEffect(() => {
    document.title = 'Feedback Ui Design';
  }, []);

  const [active, setActive] = useState(ratings.length - 1);
  const [send, setSend] = useState(false);

  return (<div className='body-43'>

    <div className="panel-container-43">
      {!send &&
        <>
          <strong>How satisfied are you with our <br /> customer support performance?</strong>
          <div className="ratings-container-43">
            {ratings.map((rating, idx) => {
              return (
                <div key={idx} className={`rating-43 ${active === idx ? 'active-43' : ''}`} onClick={() => setActive(idx)}>
                  <img src={rating.src} alt={rating.msg} />
                  <small>{rating.msg}</small>
                </div>)
            })}
          </div>
          <button onClick={() => setSend(true)}>Send Review</button>
        </>}

      {send &&
        <>
          <span className='heart-43'>♥️</span>
          <strong>Thank You!</strong>

          <strong>Feedback: {ratings[active].msg} </strong>
          <p>We&#39;ll use your feedback to improve our customer support</p>
        </>}
    </div>

  </div>);
}