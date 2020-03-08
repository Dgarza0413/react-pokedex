import React from 'react'
import Grid from '@material-ui/core/Grid'

const InputForm = ({ handleChange, handleClick }) => {
    // console.log(handleChange)

    return (
        <>
            <Grid>
                <div className="nes-field">

                    {/* <label>
                        <input type="radio" class="nes-radio" name="answer" />
                        <span>Kanto</span>
                    </label>

                    <label>
                        <input type="radio" class="nes-radio" name="answer" />
                        <span>Johto</span>
                    </label>
                    <label>
                        <input type="radio" class="nes-radio" name="answer" />
                        <span>Hoenn</span>
                    </label>

                    <label>
                        <input type="radio" class="nes-radio" name="answer" />
                        <span>Sinnoh</span>
                    </label> */}
                    <form onSubmit={handleClick}>
                        <label>Enter PokeMon</label>
                        <input
                            name="pokemonId"
                            type="text"
                            id="name_field"
                            onChange={handleChange}
                            className="nes-input nes-pointer" />
                        {/* <span className="nes-text is-error">Error not a pokemon, use an ID or name</span> */}

                        <button
                            type="button"
                            name="pokemon-name-btn"
                            className="nes-btn is-primary"
                        // onClick={handleClick}
                        >
                            Search</button>
                    </form>
                </div>
            </Grid>
        </>
    )
}

export default InputForm