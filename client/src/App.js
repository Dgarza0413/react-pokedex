import React, { useState } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import StatTable from './components/Table/StatTable';
import PokemonCard from './components/Card/PokemonCard';
import MoveList from './components/Lists/MoveList';
import './App.css';

function App() {
  const [data, setData] = useState([])
  const [pokemon, setPokemon] = useState("pikachu")

  console.log(data)

  const handleChange = (event) => {
    console.log("something is happening")
    event.preventDefault()
    console.log(event.target.name)
    console.log(event.target.value)
  }

  const handleClick = (event) => {
    setPokemon(event.target.value)
    console.log(pokemon)
  }

  const getPokemon = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`
      const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
      const res = await axios.get(url)
      setData(res.data)
    } catch (error) {
      console.error(error)
    }

  }

  return (
    <div className="body">
      <div className="nes-container with-title">
        <h1 className="title">PokeDex</h1>
        <progress
          className="nes-progress"
          value="90"
          max="100"
        ></progress>
        <div className="nes-field">
          <label>Enter PokeMon</label>
          <input
            type="text"
            id="name_field"
            onChange={handleChange}
            className="nes-input nes-pointer" />
        </div>
        <button
          type="button"
          name="pokemon-name-btn"
          className="nes-btn is-primary"
          onClick={getPokemon}
        >
          Primary
        </button>
        <button
          type="button"
          className="nes-btn is-disabled nes-pointer"
        >
          Disabled
           </button>
        <PokemonCard id={data.id || ''}
          name={data.name}
          types={data.types || []}
          height={data.height}
        />
        <StatTable stats={data.stats || []} />
        <MoveList abilities={data.abilities || []}
          moves={data.moves || []}
        />
      </div>
    </div>
  );
}

export default App;
