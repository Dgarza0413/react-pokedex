import React from 'react'

const Player = ({ name, id, sprites, stats }) => {
    return (
        <div>
            {name}
            <img src={sprites.back_default} alt={name} />
            {stats.map(e => {
                return (
                    (e.stat.name === "hp")
                        ? <div>
                            <span>HP:</span>
                            <progress className="nes-progress"
                                value={e.base_stat || ''}
                                max={e.base_stat || ''}
                            />
                        </div>
                        : ''
                )
            })}        </div>
    )
}

export default Player
