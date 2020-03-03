import React from 'react'
import axios from 'axios'

const InputForm = ({ handleChange, handleClick, getPokemon }) => {



    return (
        <>
            <div className="nes-field">
                <label>Enter PokeMon</label>
                <input
                    type="text"
                    id="name_field"
                    onChange={handleChange}
                    className="nes-input nes-pointer" />
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
        </>
    )
}

export default InputForm