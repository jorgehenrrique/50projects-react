import { useEffect, useState } from 'react';
import './CustomRangeSlider.css';

export default function CustomRangeSlider() {
  useEffect(() => {
    document.title = 'Custom Range Slider';
  }, []);

  const [range, setRange] = useState(50);
  const [left, setLeft] = useState(null);

  function handleRange(e) {
    const value = e.target.value;
    setRange(value);
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    setLeft(value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10));
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

  return (
    <div className='body-44'>

      <h2>Custom Range Slider</h2>
      <div className="range-container-44">
        <input type="range" id="range" min="0" max="100" onChange={(e) => handleRange(e)} />
        <label htmlFor="range" style={{ left: `${left}px` }}>{range}</label>
      </div>

    </div>);
}