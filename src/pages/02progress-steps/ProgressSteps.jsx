import './ProgressSteps.css';

export default function ProgressSteps() {
  return (
    <div className="container-02">
      <div className="progress-container">
        <div className="progress" id="progress"></div>
        <div className="circle active">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
      </div>

      <div>
        <button className="btn" id="prev" disabled>Prev</button>
        <button className="btn" id="next">Next</button>
      </div>
    </div>
  );
}