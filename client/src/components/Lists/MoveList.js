import React from 'react';
import Grid from '@material-ui/core/Grid';

const MoveList = ({ abilities, moves }) => {
    return (
        <div className="nes-container with-title">
            <h3 className="title">moves/abilities</h3>
            <Grid container>
                <Grid item xs={6}>
                    <div className="lists">
                        <ul className="nes-list is-disc">
                            {abilities.map(e => {
                                return (
                                    <li>{e.ability.name}</li>
                                )
                            })}
                        </ul>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <div className="lists">
                        <ul className="nes-list is-circle">
                            {moves.map(e => {
                                return (
                                    <li>{e.move.name} </li>
                                )
                            })}
                        </ul>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default MoveList;