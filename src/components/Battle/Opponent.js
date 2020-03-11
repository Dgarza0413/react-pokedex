import React from 'react'
import Grid from '@material-ui/core/Grid'

const Opponent = ({ name, sprites, stats }) => {
    // const hp = stats[stats.length - 1]
    console.log(stats)
    return (
        <Grid>
            {name}
            <img src={sprites.front_default} alt={name} />
            {/* <progress className="nes-progress" value={stats[5].base_stat || ''} max={stats[stats.length - 1].base_stat || ''} /> */}
        </Grid>
    )
}

export default Opponent;