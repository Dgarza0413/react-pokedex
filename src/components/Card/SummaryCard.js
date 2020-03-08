import React from 'react'
import Grid from '@material-ui/core/Grid'

const SummaryCard = ({ sprites, name }) => {
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
                            <div class="nes-badge">
                                <span class="is-dark">Grd</span>
                            </div>
                        </Grid>
                    </Grid>
                </>}
        </div >
    )
}

export default SummaryCard;
