import React from 'react'

const Player = ({ name, id, sprites, stats }) => {
    return (
        <div>
            {name}
            <img src={sprites.back_default} alt={name} />
        </div>
    )
}

export default Player
