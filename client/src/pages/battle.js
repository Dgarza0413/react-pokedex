import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

import Opponent from '../components/Battle/Opponent'
import DialogBox from '../components/Battle/DialogBox'
import OptionsStrategy from '../components/Battle/OptionsStrategy'
import OptionsAttack from '../components/Battle/OptionsAttack'
import Player from '../components/Battle/Player';
import Chatbox from '../components/Battle/Chatbox';

const Battle = () => {
    // const socket = io()
    const socket = io('http://localhost:3001')
    const [pokemon, setPokemon] = useState([])
    const [response, setResponse] = useState([])
    const [value, setValue] = useState(
        {
            name: ''
        }
    )
    const randomSearch = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 151) + 1}/`)
            .then(res => {
                setPokemon(res.data)
            })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        socket.emit('chat message', value)
        return false
    }

    const handleChange = (event) => {
        event.persist()
        setValue(values => {
            return {
                ...values,
                [event.target.name]: event.target.value
            }
        })
    }


    useEffect(() => {
        const socket = io('http://localhost:3001')
        socket.on('connect', function (event) {
            console.log('connection made')
        })
        socket.on('chat message', function (msg) {
            setResponse(set => [...set, msg]);
        })
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
                        <OptionsStrategy />
                    </Grid>
                </Grid>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>INPUT MSG</label>
                    <input
                        name='name'
                        type="text"
                        value={value.name}
                        onChange={handleChange}
                    />
                    <button>submit</button>
                </form>
                <Chatbox messages={response} />
            </div>
        </div>
    )
}

export default Battle