import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SummaryCard from '../components/Card/SummaryCard';
import Grid from '@material-ui/core/Grid';
import '../App.css'

const Search = () => {
    const [data, setData] = useState([])
    const [increment, setIncrement] = useState(2)

    console.log(data)

    const array = [...new Array(increment)].map((e, i) => {
        return e = Math.floor(Math.random() * 151) + 1
    })

    const randomSearch = async () => {
        const arr = []
        await Promise.all(array.map(async (e, i) => {
            await axios.get(`https://pokeapi.co/api/v2/pokemon/${e}/`)
                .then(res => {
                    arr.push(res.data)
                })
        }))
        setData(arr)
    }

    useEffect(() => {
        randomSearch()
    }, [increment])

    return (
        <>
            <Grid container spacing={3}>
                {data.map((e, i) => {
                    return (
                        <Grid item key={e.id}>
                            <div className="card">
                                <SummaryCard
                                    name={e.name}
                                    sprites={e.sprites.front_default}
                                    types={e.types}
                                    id={e.id}
                                />
                            </div>
                        </Grid>
                    )
                })}
                <Grid>
                    <button
                        type="button"
                        className="nes-btn is-primary"
                        onClick={() => setIncrement(increment + 3)}
                    >Add more</button>
                </Grid>
            </Grid>
        </>
    )
}

export default Search