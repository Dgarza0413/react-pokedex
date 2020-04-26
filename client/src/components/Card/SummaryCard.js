import React from 'react'
import Grid from '@material-ui/core/Grid'

import badges from '../Badges/Badges';

const SummaryCard = ({ sprites, name, types, id }) => {
    return (
        <div className="nes-container with-title">
            <h3 className="title">Pokemon</h3>
            <div className="pokemonNum">
                <span >NO.{id}</span>
            </div>
            {name &&
                <>
                    <Grid container spacing={3} >
                        <Grid container item xs={12}>
                            <Grid item xs={12}>
                                <img alt={name} src={sprites} />
                            </Grid>
                            <Grid item xs={12}>
                                <div className="text-center">{name}</div>
                            </Grid>
                        </Grid>
                        <Grid container item xs={12}>
                            {
                                types.map((e, i) => {
                                    return (
                                        <Grid item xs={6}>
                                            {badges(e.type.name)}
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Grid>
                </>}
        </div >
    )
}

export default SummaryCard;
