import React from 'react'

const PokemonCard = ({ id, name, types, height, weight }) => {
    console.log(types)
    const callGeneral = async () => {
        try {
            const url = ``
        } catch (error) {

        }
    }
    return (
        <div className="nes-container with-title">
            <h3 className="title">Pokemon</h3>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} />
            <div>{name}</div>
            <div>type: {types.map((e, i) => {
                return (
                    <>
                        {e.type.name}
                    </>
                )
            })}
            </div>
            <div>height: {height}</div>
            <div>weight: {weight}</div>
            <div>general: {}</div>

        </div >
    )
}

export default PokemonCard