import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

// components
import SummaryCard from '../components/Card/SummaryCard';
import Grid from '@material-ui/core/Grid';
import '../App.css'

const Search = () => {
    const [data, setData] = useState([])
    const [increment, setIncrement] = useState(2)
    const [presentId, setPresentId] = useState([])


    const array = () => {
        const arr = []
        for (let i = 0; i < increment; i++) {
            const numRand = Math.floor(Math.random() * 151) + 1
            if (presentId.indexOf(numRand) === -1) {
                arr.push(numRand)
            } else {
                console.log('item exists')
            }
        }
        setPresentId(
            values => {
                return [...values, ...arr]
            })
    }


    const randomSearch = async () => {
        const arr = []
        await Promise.all(
            presentId.map(
                async (e) => {
                    const url = await `https://pokeapi.co/api/v2/pokemon/${e}/`
                    const res = await axios.get(url)
                    await arr.push(res.data)
                }))
        setData(arr)
    }

    useEffect(() => {
        randomSearch()
    }, [presentId])

    return (
        <>
            <Grid
                container
                spacing={3}>
                {data.map((e, i) => {
                    return (
                        <Grid item
                            key={e.id}>
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
                <Grid
                    container
                    item
                    direction="row"
                    justify="center"
                    alignItems="center"
                    xs={12}
                >
                    <button
                        type="button"
                        className="nes-btn is-primary"
                        onClick={array}
                    >Add more</button>
                </Grid>
            </Grid>
        </>
    )
}

export default Search