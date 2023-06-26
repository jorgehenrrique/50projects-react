/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './DrinkWater.css';

export default function DrinkWater() {
  useEffect(() => {
    document.title = 'Drink Water';
  }, []);

  return (
    <div className="body-15">
      <h1>Drink Water</h1>
    </div>
  );
}