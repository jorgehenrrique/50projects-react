import { useEffect, useState } from 'react';
import './FAQcollapse.css';
import abaixo from './icon/abaixo.png';
import acima from './icon/acima.png';

function Questions({ question, response }) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    return () => { setActive(false); };
  }, []);

  return (
    <>
      <div className={`faq-12 ${active ? 'active-12' : ''}`}>
        <h3>{question}</h3>
        <p>{response}</p>

        <button>
          {!active && <img src={abaixo} onClick={() => setActive(!active)} />}
          {active && <img src={acima} onClick={() => setActive(!active)} />}
        </button>
      </div>
    </>
  );
}

export default function FAQcollapse() {
  useEffect(() => {
    document.title = 'FAQ collapse';
  }, []);

  const questions = [{
    question: 'Why shouldnt we trust atoms?',
    response: 'They make up everything'
  },
  {
    question: 'What do you call someone with no body and no nose?',
    response: 'Nobody knows.'
  },
  {
    question: 'Whats the object-oriented way to become wealthy?',
    response: 'Inheritance.'
  },
  {
    question: 'How many tickles does it take to tickle an octopus?',
    response: 'Ten-tickles!'
  },
  {
    question: 'What is: 1 + 1?',
    response: 'Depends on who are you asking.'
  }];

  return (
    <div className="body-12">
      <h1>Frequently Asked Questions</h1>
      <div className="container-12">
        {questions.map((askes, index) => (
          <Questions key={index} question={askes.question} response={askes.response} />
        ))}
      </div >
    </div>
  );
}
