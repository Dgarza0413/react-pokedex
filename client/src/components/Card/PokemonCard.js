import React, { useEffect, useState } from 'react'
import Grid from '@material-ui/core/Grid';

import baseUrl from '../../utils/baseURL';

import '../../App.css'

const PokemonCard = ({ id, name, types, height, weight, handleIncrement, sprites, general }) => {

    return (
        <div className="nes-container with-title">
            <h3 className="title">Pokemon</h3>
            {name &&
                <>
                    <Grid container spacing={3} >
                        <Grid container item xs={12} sm={6}>
                            <Grid item xs={12}>
                                <img src={sprites} />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="text-center">{name}</div>
                            </Grid>
                            <Grid container item direction="row" justify="center" alignItems="center" spacing={3}>
                                <Grid item >
                                    <button
                                        className="nes-btn is-primary"
                                        value="-"
                                        onClick={handleIncrement}
                                    >{`<`}</button>
                                </Grid>
                                <Grid item >
                                    <button
                                        className="nes-btn is-primary"
                                        value="+"
                                        onClick={handleIncrement}
                                    >{'>'}</button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div>type: {types.map((e, i) => {
                                return (
                                    <>
                                        {e.type.name}
                                    </>
                                )
                            })}
                            </div>
                            <div>ht: {height}</div>
                            <div>wt: {weight}</div>
                            <div>general: {}</div>
                        </Grid>
                    </Grid>
                </>}
        </div >
    )
}

export default PokemonCard