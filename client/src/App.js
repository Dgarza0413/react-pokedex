import React, { useState } from 'react';
import axios from 'axios';

import StatTable from './components/Table/StatTable';
import PokemonCard from './components/Card/PokemonCard';
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


  https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png
  return (
    <div className="body">
      <div className="nes-container with-title is-centered">
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
        <PokemonCard id={data.id || ''} />
        <StatTable stats={data.stats || []} />
      </div>
    </div>
  );
}

export default App;
