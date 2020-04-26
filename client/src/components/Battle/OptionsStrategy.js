import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

const StrategyOptions = () => {
    const options = ["Attack", "Bag", "Pokemon", "FLEE"]
    const [checked, setChecked] = useState('')

    const handleClick = (event) => {
        setChecked(event.target.name)
    }

    return (
        <Grid container spacing={3}>
            {options.map((e, i) => {
                return (
                    <Grid item xs={6}>
                        <label>
                            <input
                                type="radio"
                                class="nes-radio"
                                name={e}
                                onClick={handleClick}
                                checked={e === checked ? true : false}
                            />
                            <span>{e}</span>
                        </label>
                    </Grid>
                )
            })}
        </Grid>
    )
}


export default StrategyOptions