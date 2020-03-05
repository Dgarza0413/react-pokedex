import React from 'react'

const MoveList = ({ abilities, moves }) => {
    return (
        <div className="nes-container with-title">
            <h3 className="title">moves/abilities</h3>
            <div className="lists">
                <ul className="nes-list is-disc">
                    {abilities.map(e => {
                        return (
                            <li>{e.ability.name}</li>
                        )
                    })}
                </ul>
            </div>
            {moves.map(e => {
                return (
                    <>{e.move.name} </>
                )
            })}
        </div>
    )
}

export default MoveList;