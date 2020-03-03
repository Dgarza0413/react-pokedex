import React from 'react'

const ProgressBar = ({ value }) => {
    console.log(value)
    return (
        <div>
            <progress className="nes-progress" value={value} max="100"></progress>
        </div>
    )
}

export default ProgressBar;