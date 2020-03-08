import React, { useEffect, useState } from 'react';
import baseUrl from '../utils/baseURL';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';

import PokemonCard from '../components/Card/PokemonCard';

import '../App.css'

const Search = () => {
    const [data, setData] = useState([])

    const array = [...new Array(4)].map((e, i) => {
        return e = Math.floor(Math.random() * 151) + 1
    })

    const randomSearch = () => {
        try {
            const arr = []
            array.map((e, i) => {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${e}/`)
                    .then(res => {
                        arr.push(res.data)
                        setData(arr)
                    })
            })
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        randomSearch()
    }, [])

    return (
        <Grid container spacing={3}>
            {data.map((e, i) => {
                return (
                    <>
                        {
                            <Grid item={4}>
                                <div className="card">
                                    <PokemonCard
                                        name={e.name}
                                        types={e.types}
                                        height={e.height}
                                        weight={e.weight}
                                        sprites={e.sprites.front_default}
                                    />
                                </div>
                            </Grid>
                        }
                    </>
                )
            })}
        </Grid>
    )
}

export default Search