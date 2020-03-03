import React from 'react'

const MoveList = ({ abilities, moves }) => {
    console.log(abilities)
    return (
        <div className="nes-container with-title">
            <h3 className="title">moves/abilities</h3>
            {abilities.map(e => {
                return (
                    <div>{e.ability.name}</div>
                )
            })}
            {moves.map(e => {
                return (
                    <>{e.move.name} </>
                )
            })}
        </div>
    )
}

export default MoveList;