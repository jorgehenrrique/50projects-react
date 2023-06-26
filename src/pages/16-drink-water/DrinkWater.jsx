/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import './DrinkWater.css';

export default function DrinkWater() {
  useEffect(() => {
    document.title = 'Drink Water';
  }, []);

  let copos = [];
  for (let index = 0; index < 6; index++) {
    copos.push(
      <div key={index} className="copo copo-pequeno">250 ml</div>
    );
  }

  return (
    <div className="body-16">
      <h1>Beber água</h1>
      <h3>Objetivo: 2 litros</h3>

      <div className="copo">
        <div className="restante" id="remained">
          <span id="liters">1L</span>
          <small>Restam</small>
        </div>

        <div className="percentage" id="percentage">10%</div>
      </div>

      <p className="text-16">Selecione quantos copos de água você bebeu</p>

      <div className="copos">
        <div className="copo copo-pequeno cheio">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        <div className="copo copo-pequeno">250 ml</div>
        {/* {copos} */}
      </div>

    </div>
  );
}