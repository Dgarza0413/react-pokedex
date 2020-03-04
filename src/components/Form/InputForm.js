import React from 'react'
import Grid from '@material-ui/core/Grid'

const InputForm = ({ handleChange, handleClick, getPokemon }) => {

    return (
        <>
            <Grid>
                <div className="nes-field">
                    <label>Enter PokeMon</label>
                    <input
                        name="pokemonId"
                        type="text"
                        id="name_field"
                        onChange={handleChange}
                        className="nes-input nes-pointer" />
                    <span class="nes-text is-error">Error not a pokemon, use an ID or name</span>

                </div>
                <button
                    type="button"
                    name="pokemon-name-btn"
                    className="nes-btn is-primary"
                    onClick={getPokemon}
                >
                    Primary
        </button>
                <button
                    type="button"
                    className="nes-btn is-disabled nes-pointer"
                >
                    Disabled
           </button>
            </Grid>
        </>
    )
}

export default InputForm