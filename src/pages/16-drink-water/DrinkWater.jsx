/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './DrinkWater.css';

export default function DrinkWater() {
  useEffect(() => {
    document.title = 'Drink Water';
  }, []);

  const [copoCheio, setCopoCheio] = useState([
    { copo1: false },
    { copo2: false },
    { copo3: false },
    { copo4: false },
    { copo5: false },
    { copo6: false },
    { copo7: false },
    { copo8: false },
  ]);

  function handleClick(index) {
    setCopoCheio((prevState) => {
      const updatedCopoCheio = prevState.map((copo, i) => {
        const copoAtual = Object.keys(copo)[0];
        if (i < index) {
          return { [copoAtual]: true };
        } else if (i === index) {
          return { [copoAtual]: !copo[copoAtual] };
        } else {
          return { [copoAtual]: false };
        }
      });
      return updatedCopoCheio;
    });
  }


  function verificarCopoVazio() {
    const algumCopoVazio = copoCheio.some((copo) => Object.values(copo)[0] === false);
    return algumCopoVazio;
  }

  function totalCopoCheio() {
    const cheios = copoCheio.reduce((acumulador, copo) => {
      const valorCopo = Object.values(copo)[0];
      if (valorCopo === true) {
        return acumulador + 1;
      }
      return acumulador;
    }, 0);
    return cheios;
  }

  let copos = [];
  for (let index = 0; index < 8; index++) {
    const copoAtual = Object.keys(copoCheio[index])[0];

    copos.push(
      <div key={index}
        className={`copo copo-pequeno ${copoCheio[index][copoAtual] ? 'cheio' : ''}`}
        onClick={() => handleClick(index)}>250 ml</div>
    );
  }

  return (
    <div className="body-16">
      <h1>Beber água</h1>
      <h3>Objetivo: 2 litros</h3>

      <div className="copo">
        <div className="restante-16"
          style={{
            visibility: `${verificarCopoVazio() ? 'visible' : 'hidden'}`,
            height: `${verificarCopoVazio() ? '' : '0'}px`
          }}>
          <span>{2 - (250 * totalCopoCheio() / 1000)}L</span>
          <small>Restam</small>
        </div>

        <div className="percentage-16"
          style={{
            height: `${totalCopoCheio() / copoCheio.length * 330}px`,
            visibility: `${totalCopoCheio() === 0 ? 'hidden' : 'visible'}`
          }}>
          {totalCopoCheio() / copoCheio.length * 100}%</div>
      </div>

      <p className="text-16">Selecione quantos copos de água você bebeu</p>

      <div className="copos">
        {copos}
      </div >
    </div >
  );
}