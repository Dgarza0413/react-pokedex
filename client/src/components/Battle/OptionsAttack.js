import React from 'react'
import Grid from '@material-ui/core/Grid';

const OptionsAttack = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={6}>
                <label>
                    <input type="radio" class="nes-radio" name="answer" checked />
                    <span>tackle</span>
                </label>
            </Grid>

            <Grid item xs={6}>   <label>
                <input type="radio" class="nes-radio" name="answer" />
                <span>drop kick</span>
            </label>
            </Grid>
            <Grid item xs={6}>
                <label>
                    <input type="radio" class="nes-radio" name="answer" checked />
                    <span>focus</span>
                </label>
            </Grid>
            <Grid item xs={6}>
                <label>
                    <input type="radio" class="nes-radio" name="answer" />
                    <span>heal</span>
                </label>
            </Grid>
        </Grid>
    )
}

export default OptionsAttack
