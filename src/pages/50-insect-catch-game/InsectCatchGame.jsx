import { useEffect, useState } from 'react';
import './InsectCatchGame.css';

const insects = [
  {
    text: 'Fly',
    src: 'http://pngimg.com/uploads/fly/fly_PNG3946.png',
    alt: 'fly',
  },
  {
    text: 'Mosquito',
    src: 'http://pngimg.com/uploads/mosquito/mosquito_PNG18175.png',
    alt: 'mosquito',
  },
  {
    text: 'Spider',
    src: 'http://pngimg.com/uploads/spider/spider_PNG12.png',
    alt: 'spider',
  },
  {
    text: 'Roach',
    src: 'http://pngimg.com/uploads/roach/roach_PNG12163.png',
    alt: 'roach',
  },
];

export default function InsectCatchGame() {
  useEffect(() => {
    document.title = 'Insect Catch Game';
  }, []);

  const initialGameState = {
    screens: 0,
    seconds: 0,
    score: 0,
    messageVisible: false,
    insectElements: [],
  };

  const [gameState, setGameState] = useState(initialGameState);

  let selectedInsect = null;
  let timer = null;

  const handleGame = (idx) => {
    if (timer) {
      clearInterval(timer);
    }

    selectedInsect = insects[idx];
    setGameState({
      ...initialGameState,
      screens: 2,
    });
    startGame();
  };

  const startGame = () => {
    timer = setInterval(increaseTime, 1000);
    createInsect();
  };

  const increaseTime = () => {
    setGameState((prevState) => ({
      ...prevState,
      seconds: prevState.seconds + 1,
    }));
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const createInsect = () => {
    const { x, y } = getRandomLocation();
    const randomRotation = Math.random() * 360;
    const insectId = Date.now();

    const insectElement = (
      <div
        className={`insect-50`}
        style={{
          top: `${y}px`,
          left: `${x}px`,
        }}
        onClick={() => catchInsect(insectId)}
        key={insectId}>
        <img
          src={selectedInsect.src}
          alt={selectedInsect.alt}
          style={{
            transform: `rotate(${randomRotation}deg)`,
          }} />
      </div>
    );

    setGameState((prevState) => ({
      ...prevState,
      insectElements: [...prevState.insectElements, insectElement],
    }));
  };

  const getRandomLocation = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
  };

  const catchInsect = (insectId) => {
    setGameState((prevState) => ({
      ...prevState,
      score: prevState.score + 1,
    }));

    setGameState((prevState) => ({
      ...prevState,
      insectElements: prevState.insectElements.filter(
        (element) => element.key !== String(insectId)
      ),
    }));
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
  };

  useEffect(() => {
    if (gameState.score > 19) {
      setGameState((prevState) => ({
        ...prevState,
        messageVisible: true,
      }));
      clearInterval(timer);
    }
  }, [gameState.score]);

  const handleRestart = () => {
    clearInterval(timer);
    setGameState(initialGameState);
  };

  return (
    <div className="body-50">
      <div className={`screen-50 ${gameState.screens > 0 ? 'up-50' : ''}`}>
        <h1>Catch The Insect</h1>
        <button onClick={() => setGameState({ ...gameState, screens: gameState.screens + 1 })}>
          Play Game
        </button>
      </div>

      <div className={`screen-50 ${gameState.screens > 1 ? 'up-50' : ''}`}>
        <h1>What is your &#39;favorite&#39; insect?</h1>
        <ul className="insects-list-50">
          {insects.map((insect, idx) => (
            <li key={idx}>
              <button onClick={() => handleGame(idx)}>
                <p>{insect.text}</p>
                <img src={insect.src} alt={insect.alt} />
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={`screen-50 game-container-50`}>
        <h3 className="time-50">Time: {formatTime(gameState.seconds)}</h3>
        <h3 className="score-50">Score: {gameState.score}</h3>
        <h5 className={`message-50 ${gameState.messageVisible ? 'visible-50' : ''}`}>
          Are you annoyed yet? <br />
          You are playing an impossible game!! <br />
          <button onClick={handleRestart}>Restart</button>
        </h5>
        {gameState.insectElements}
      </div>
    </div>
  );
}
