import { useEffect } from 'react';
import './SoundBoard.css';
import applause from './sounds/applause.mp3';
import boo from './sounds/boo.mp3';
import gasp from './sounds/gasp.mp3';
import tada from './sounds/tada.mp3';
import victory from './sounds/victory.mp3';
import wrong from './sounds/wrong.mp3';

export default function SoundBoard() {
  useEffect(() => {
    document.title = 'Sound Board';
  }, []);

  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
  };

  return (
    <div className="container-09">
      <audio id='applause' src={applause}></audio>
      <audio id='boo' src={boo}></audio>
      <audio id='gasp' src={gasp}></audio>
      <audio id='tada' src={tada}></audio>
      <audio id='victory' src={victory}></audio>
      <audio id='wrong' src={wrong}></audio>

      <button onClick={() => playAudio('applause')}>Applause</button>
      <button onClick={() => playAudio('boo')}>Boo</button>
      <button onClick={() => playAudio('gasp')}>Gasp</button>
      <button onClick={() => playAudio('tada')}>Tada</button>
      <button onClick={() => playAudio('victory')}>Victory</button>
      <button onClick={() => playAudio('wrong')}>Wrong</button>
    </div>
  );
}

