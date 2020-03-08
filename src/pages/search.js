import React, { useEffect, useState } from 'react';
import axios from 'axios';

// components
import SummaryCard from '../components/Card/SummaryCard';
import Grid from '@material-ui/core/Grid';
import '../App.css'

const Search = () => {
    const [data, setData] = useState([])

    const array = [...new Array(5)].map((e, i) => {
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
    }, [])

    return (
        <>
            <Grid container spacing={3}>
                {data.map((e, i) => {
                    return (
                        <>
                            {
                                <Grid id={i} item={4}>
                                    <div className="card">
                                        <SummaryCard
                                            name={e.name}
                                            sprites={e.sprites.front_default} />
                                    </div>
                                </Grid>
                            }
                        </>
                    )
                })}
                <Grid>
                    <button type="button" className="nes-btn is-primary">Add more</button>
                </Grid>
            </Grid>
        </>
    )
}

export default Search