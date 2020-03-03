import React from 'react'

const PokemonCard = ({ id }) => {
    console.log(id)
    return (
        <div className="nes-container with-title">
            <h3 className="title">Pokemon</h3>
            <br />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
        </div >
    )
}

export default PokemonCard