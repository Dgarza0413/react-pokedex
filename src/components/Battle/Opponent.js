import React from 'react'
import Grid from '@material-ui/core/Grid'

const Opponent = ({ name, sprites, stats }) => {
    console.log(stats)
    return (
        <Grid>
            <Grid>
                {name}
                <img src={sprites.front_default} alt={name} />
            </Grid>
            <Grid>
                {stats.map(e => {
                    return (
                        (e.stat.name === "hp")
                            ? <div>
                                <span>HP:</span>
                                <progress className="nes-progress"
                                    value={e.base_stat || ''}
                                    max={e.base_stat || ''}
                                />
                            </div>
                            : ''
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default Opponent;