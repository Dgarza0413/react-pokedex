import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Opponent from '../components/Battle/Opponent'
import DialogBox from '../components/Battle/DialogBox'
import OptionsStrategy from '../components/Battle/OptionsStrategy'
import OptionsAttack from '../components/Battle/OptionsAttack'
import Player from '../components/Battle/Player';

const Battle = () => {
    const [pokemon, setPokemon] = useState([])

    console.log(pokemon)

    const randomSearch = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}/`)
            .then(res => {
                setPokemon(res.data)
            })
    }


    useEffect(() => {
        randomSearch()
    }, [])
    return (
        <div className="nes-container with-title">
            <h3 className="title">Battle</h3>
            <Grid container justify='flex-end'>
                <Opponent
                    id={pokemon.id || ''}
                    name={pokemon.name}
                    sprites={pokemon.sprites || {}}
                    stats={pokemon.stats || []}
                />
            </Grid>
            <Grid container justify='flex-start'>
                <Player
                    id={pokemon.id || ''}
                    name={pokemon.name}
                    sprites={pokemon.sprites || {}}
                    stats={pokemon.stats || []}
                />
            </Grid>
            <div className="nes-container">
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item xs={8}>
                        <DialogBox />
                    </Grid>
                    <Grid item xs={4}>
                        {/* <OptionsAttack /> */}
                        <OptionsStrategy />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Battle