import { useEffect, useRef, useState } from 'react';
import './QuizApp.css';

const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: {
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
    },
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    options: {
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
    },
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    options: {
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
    },
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    options: {
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
    },
    correct: "b",
  },
];

export default function QuizApp() {
  useEffect(() => {
    document.title = 'Quiz App';
  }, []);

  const [quizState, setQuizState] = useState({
    idx: 0,
    corrects: 0,
    quizFinished: false,
    selectedAnswer: null,
  });

  const { idx, corrects, quizFinished, selectedAnswer } = quizState;
  const { question, options, correct } = quizData[idx];

  const questionRefs = {
    a: useRef(null),
    b: useRef(null),
    c: useRef(null),
    d: useRef(null),
  };

  useEffect(() => {
    if (quizFinished) {
      return;
    }
  }, [idx, quizFinished]);

  function handleQuestions() {
    if (quizFinished || selectedAnswer === null) {
      return;
    }

    if (selectedAnswer === correct) {
      setQuizState((prevState) => ({
        ...prevState,
        corrects: prevState.corrects + 1,
      }));
    }

    // Desmarca a opção selecionada
    questionRefs[selectedAnswer].current.checked = false;

    if (idx < quizData.length - 1) {
      setQuizState((prevState) => ({
        ...prevState,
        idx: prevState.idx + 1,
        selectedAnswer: null,
      }));
    } else {
      setQuizState((prevState) => ({
        ...prevState,
        quizFinished: true,
      }));
    }
  }

  function handleReload() {
    setQuizState({
      idx: 0,
      corrects: 0,
      quizFinished: false,
      selectedAnswer: null,
    });
  }

  return (
    <div className='body-46'>

      <div className="quiz-container-46">
        <div className="quiz-header-46">
          {quizFinished ? (
            <h2>{`You answered ${corrects}/${quizData.length} questions correctly`}</h2>
          ) : (
            <>
              <h2>{question}</h2>
              <ul>
                {Object.entries(options).map(([key, value]) => (
                  <li key={key}>
                    <input
                      type="radio"
                      name="answer"
                      id={key}
                      ref={questionRefs[key]}
                      className="answer"
                      checked={selectedAnswer === key}
                      onChange={() => setQuizState((prevState) => ({
                        ...prevState,
                        selectedAnswer: key,
                      }))}
                    />
                    <label htmlFor={key} id={`${key}_text`}>{value}</label>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        {!quizFinished && (<button onClick={handleQuestions}>Submit</button>)}
        {quizFinished && (<button onClick={handleReload}>Reload</button>)}
      </div>

    </div>
  );
}
