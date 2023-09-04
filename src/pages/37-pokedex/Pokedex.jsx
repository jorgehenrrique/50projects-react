/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './Pokedex.css';

const pokemon_count = 150;
const colors = {
  fire: '#FDDFDF',
  grass: '#DEFDE0',
  electric: '#FCF7DE',
  water: '#DEF3FD',
  ground: '#f4e7da',
  rock: '#d5d5d4',
  fairy: '#fceaff',
  poison: '#98d7a5',
  bug: '#f8d5a3',
  dragon: '#97b3e6',
  psychic: '#eaeda1',
  flying: '#F5F5F5',
  fighting: '#E6E0D4',
  normal: '#F5F5F5'
};
const main_types = Object.keys(colors);

export default function Pokedex() {
  useEffect(() => {
    document.title = 'Pokedex';
  }, []);

  const [pokemonElements, setPokemonElements] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i);
      }
    };
    fetchPokemons();

    return () => setPokemonElements([]);
  }, []);


  const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    createPokemonCard(data);
  }


  const createPokemonCard = (pokemon) => {
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');
    const poke_types = pokemon.types.map(type => type.type.name);
    const type = main_types.find(type => poke_types.indexOf(type) > -1);
    const color = colors[type];

    setPokemonElements(prevElements => [
      ...prevElements,
      <div className="pokemon-37" style={{ backgroundColor: color }} key={id + name}>
        <div className='img-container-37'>
          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={name} />
        </div>
        <div className="info-37">
          <span className='number-37'>#{id}</span>
          <h3 className="name-37">{name}</h3>
          <small>Type: <span>{type}</span></small>
        </div>
      </div>
    ]);
  }

  return (
    <div className='body-37'>

      <h1>Pokedex</h1>
      <div className="poke-container-37">
        {pokemonElements}
      </div>

    </div>);
}