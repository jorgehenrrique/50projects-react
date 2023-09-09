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

  const [active, setActive] = useState(-1);

  console.log(ratings)

  function handleActive(idx) {
    setActive(idx);
  }

  return (<div className='body-43'>

    <div className="panel-container-43">
      <strong>How satisfied are you with our <br /> customer support performance?</strong>
      <div className="ratings-container-43">
        {/* <div className="rating-43">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-17.png" alt="" />
          <small>Unhappy</small>
        </div>

        <div className="rating-43">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-3.png" alt="" />
          <small>Neutral</small>
        </div>

        <div className="rating-43 active-43">
          <img src="https://img.icons8.com/external-neu-royyan-wijaya/64/000000/external-emoji-neumojis-smiley-neu-royyan-wijaya-30.png" alt="" />
          <small>Satisfied</small>
        </div> */}
        {ratings.map((rating, idx) => {
          return (
            <div key={idx} className={`rating-43 ${active === idx ? 'active-43' : ''}`} onClick={() => handleActive(idx)}>
              <img src={rating.src} alt={rating.msg} />
              <small>{rating.msg}</small>
            </div>)
        })}
      </div>
      <button>Send Review</button>
    </div>

  </div>);
}