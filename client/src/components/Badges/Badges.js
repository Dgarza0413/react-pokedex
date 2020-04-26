import React from 'react';

export default (pokemonType) => {
    switch (pokemonType) {
        case ("fire"):
            return (
                <span className="nes-badge">
                    <span className="is-error">fire</span>
                </span>
            )
        case ('water'):
            return (
                <span className="nes-badge">
                    <span className="is-primary">wtr</span>
                </span>
            )
        case ('grass'):
            return (
                <span className="nes-badge">
                    <span className="is-success">grs</span>
                </span>
            )
        case ('psychic'):
            return (
                <span className="nes-badge">
                    <span className="is-primary" style={{ "backgroundColor": "purple", "boxShadow": "0 0.5em purple, 0 -0.5em purple, 0.5em 0 purple, -0.5em 0 purple" }}>psy</span>
                </span>
            )
        case ('fairy'):
            return (
                <span className="nes-badge">
                    <span className="is-primary" style={{ "backgroundColor": "pink", "boxShadow": "0 0.5em pink, 0 -0.5em pink, 0.5em 0 pink, -0.5em 0 pink" }}>fry</span>
                </span>
            )
        case ('normal'):
            return (
                <span className="nes-badge">
                    <span className="is-dark">nrml</span>
                </span>
            )
        case ('ice'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "lightBlue", "boxShadow": "0 0.5em lightBlue, 0 -0.5em lightBlue, 0.5em 0 lightBlue, -0.5em 0 lightBlue" }}>ice</span>
                </span>
            )
        case ('fighting'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "maroon", "boxShadow": "0 0.5em maroon, 0 -0.5em maroon, 0.5em 0 maroon, -0.5em 0 maroon" }}>fight</span>
                </span>
            )
        case ('bug'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "darkGreen", "boxShadow": "0 0.5em darkGreen, 0 -0.5em darkGreen, 0.5em 0 darkGreen, -0.5em 0 darkGreen" }}>bug</span>
                </span>
            )
        case ('rock'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "grey", "boxShadow": "0 0.5em grey, 0 -0.5em grey, 0.5em 0 grey, -0.5em 0 grey" }}>rock</span>
                </span>
            )
        case ('ground'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "brown", "boxShadow": "0 0.5em brown, 0 -0.5em brown, 0.5em 0 brown, -0.5em 0 brown" }}>grd</span>
                </span>
            )
        case ('flying'):
            return (
                <span className="nes-badge">
                    <span className="is-dark">fly</span>
                </span>
            )
        case ('poison'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "purple", "boxShadow": "0 0.5em purple, 0 -0.5em purple, 0.5em 0 purple, -0.5em 0 purple" }}>psn</span>
                </span>
            )
        case ('ghost'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "indigo", "boxShadow": "0 0.5em indigo, 0 -0.5em indigo, 0.5em 0 indigo, -0.5em 0 indigo" }}>ght</span>
                </span>
            )
        case ('dragon'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "indigo", "boxShadow": "0 0.5em indigo, 0 -0.5em indigo, 0.5em 0 indigo, -0.5em 0 indigo" }}>drg</span>
                </span>
            )
        case ('steel'):
            return (
                <span className="nes-badge">
                    <span className="is-dark" style={{ "backgroundColor": "darkGray", "boxShadow": "0 0.5em darkGray, 0 -0.5em darkGray, 0.5em 0 darkGray, -0.5em 0 darkGray" }}>stl</span>
                </span>
            )
        case ('electric'):
            return (
                <span className="nes-badge">
                    <span className="is-warning">elec</span>
                </span>
            )
        default:
            console.log('default hit')
    }
}