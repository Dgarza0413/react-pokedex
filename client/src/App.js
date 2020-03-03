import React, { useState } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import InputForm from './components/Form/InputForm';
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
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <InputForm
              handleClick={handleClick}
              handleChange={handleChange}
              getPokemon={getPokemon}
            />
          </Grid>
          <Grid item xs={6}>

            <PokemonCard id={data.id || ''}
              name={data.name}
              types={data.types || []}
              height={data.height}
              weight={data.weight}
            />
          </Grid>

          <Grid item xs={6}>

            <StatTable
              stats={data.stats || []}
            />
          </Grid>

          <Grid item xs={6}>
            <MoveList abilities={data.abilities || []}
              moves={data.moves || []}
            />
          </Grid>

        </Grid>
      </div>
    </div>
  );
}

export default App;
