import React, { useEffect, useState } from 'react';
import baseUrl from '../utils/baseURL';
import axios from 'axios';

import PokemonCard from '../components/Card/PokemonCard';

const Search = () => {
    const [data, setData] = useState([])

    const array = [...new Array(2)].map((e, i) => {
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
        <div>
            {data.map((e, i) => {
                return (
                    <>
                        {
                            <PokemonCard
                                name={e.name}
                                types={e.types}
                                sprite
                            />
                        }
                    </>
                )
            })}
        </div>
    )
}

export default Search