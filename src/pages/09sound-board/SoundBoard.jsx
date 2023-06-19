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

  const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
  const soundPaths = { applause, boo, gasp, tada, victory, wrong };

  const playAudio = (audioId) => {
    const audioElement = document.getElementById(audioId);
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play();
  };

  return (
    <div className="container-09">
      {sounds.map((sound, index) => (
        <audio key={index} id={sound} src={soundPaths[sound]}></audio>))}

      {sounds.map((sound, idx) => (
        <button key={idx} onClick={() => playAudio(sound)}>{sound}</button>))}
    </div >
  );
}
