import { useEffect, useState } from 'react';
import './ThemeClock.css';

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export default function ThemeClock() {
  useEffect(() => {
    document.title = 'Theme Clock';
  }, []);

  const [dark, setDark] = useState(false);
  const [stateTime, setStateTime] = useState(setTime());

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amPm = hours >= 12 ? 'PM' : 'AM';

    return { hoursForClock, minutes, seconds, amPm, day, month, date };
  }

  useEffect(() => {
    const intervalID = setInterval(() => {
      setStateTime(setTime());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  return (
    <div className={`body-19 ${dark && 'dark-19'}`}>
      <button onClick={(() => setDark(!dark))}>{!dark ? 'Dark mode' : 'Light mode'}</button>

      <div className="clock-container-19">
        <div className="clock-19">
          <div className="needle hour" style={{ transform: `translate(-50%, -100%) rotate(${scale(stateTime.hoursForClock, 0, 12, 0, 360)}deg)` }}></div>
          <div className="needle minute" style={{ transform: `translate(-50%, -100%) rotate(${scale(stateTime.minutes, 0, 60, 0, 360)}deg)` }}></div>
          <div className="needle second" style={{ transform: `translate(-50%, -100%) rotate(${scale(stateTime.seconds, 0, 60, 0, 360)}deg)` }}></div>
          <div className="center-point"></div>
        </div>

        <div className="time-19">
          {stateTime.hoursForClock}:{stateTime.minutes < 10 ? `0${stateTime.minutes}` : stateTime.minutes} {stateTime.amPm}
        </div>
        <div className="date-19">
          {days[stateTime.day]}, {months[stateTime.month]} <span className='circle-19'>{stateTime.date}</span>
        </div>
      </div>
    </div >
  );
}