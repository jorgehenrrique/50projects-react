import { useEffect } from 'react';
import './QuizApp.css';

export default function QuizApp() {
  useEffect(() => {
    document.title = 'Quiz App';
  }, []);

  return (
    <div className='body-46'>

      <div className="quiz-container-46">
        <div className="quiz-header-46">
          <h2>Question text</h2>
          <ul>
            <li>
              <input type="radio" name="answer" id="a" className="answer" />
              <label htmlFor="a" id="a_text">Question</label>
            </li>

            <li>
              <input type="radio" name="answer" id="b" className="answer" />
              <label htmlFor="b" id="b_text">Question</label>
            </li>

            <li>
              <input type="radio" name="answer" id="c" className="answer" />
              <label htmlFor="c" id="c_text">Question</label>
            </li>

            <li>
              <input type="radio" name="answer" id="d" className="answer" />
              <label htmlFor="d" id="d_text">Question</label>
            </li>
          </ul>
        </div>
        <button>Submit</button>
      </div>

    </div>);
}