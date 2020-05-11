import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import InputForm from '../components/Form/InputForm';
import StatTable from '../components/Table/StatTable';
import PokemonCard from '../components/Card/PokemonCard';
import MoveList from '../components/Lists/MoveList';
import PokemonMap from '../components/Map/Map';

const Pokedex = () => {
    const [value, setValue] = useState("")
    const [pokemon, setPokemon] = useState([])
    const [species, setSpecies] = useState([])

    console.log(pokemon)

    useEffect(() => {
        getPokemon()
    }, [value])

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        setValue(event.target.value)
    }

    const handleIncrement = (event) => {
        // event.persist()
        // const val = event.target.value
        //     (val === '+')
        //     ? setValue(parseInt(value) + 1)
        //     : setValue(parseInt(value) - 1)
    }

    const getPokemon = async () => {
        try {
            const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${value}/`
            const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${value}/`
            const pokemonRes = await axios.get(pokemonUrl)
            const speciesRes = await axios.get(speciesUrl)
            setPokemon(pokemonRes.data)
            setSpecies(speciesRes.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="nes-container with-title">
            <h1 className="title">PokeDex</h1>
            <Grid
                container
                spacing={3}
                alignItems="stretch"
            >
                <Grid item xs={12}>
                    <InputForm
                        handleClick={handleClick}
                        handleChange={handleChange}
                        getPokemon={getPokemon}
                    />
                </Grid>
                <Grid item xs={6}>
                    <PokemonCard
                        id={pokemon.id || ''}
                        name={pokemon.name}
                        types={pokemon.types || []}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        sprites={pokemon.sprites}
                        general={species.flavor_text_entries || []}
                        handleIncrement={handleIncrement}
                    />
                </Grid>

                <Grid item xs={6}>
                    <StatTable
                        stats={pokemon.stats || []}
                    />
                </Grid>

                <Grid item xs={12}>
                    <MoveList
                        abilities={pokemon.abilities || []}
                        moves={pokemon.moves || []}
                    />
                </Grid>
                <Grid item xs={12}>
                    <PokemonMap />
                </Grid>
            </Grid>
        </div>
    )
}

export default Pokedex