import React, { useState, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import OptionsAttack from './OptionsAttack';
import Bag from './Bag';



const StrategyOptions = () => {
    const options = ["Attack", "Bag", "Pokemon", "FLEE"]
    const [checked, setChecked] = useState('init')
    const [show, setShow] = useState(true)


    const handleClick = (event) => {
        setChecked(event.target.name)
    }

    const handleOptions = (checked) => {
        switch (checked) {
            case "init":
                return
            case "Attack":
                return <OptionsAttack />;
            case "Pokemon":
                return <h1>Return pokemon</h1>
            case "FLEE":
                return console.log("Flee was selected")
            case "Bag":
                return <Bag
                    show={show}
                    setShow={setShow}
                />;
            default:
                return console.log('default')
        }
    }

    useEffect(() => {
        handleOptions()
    }, [checked])


    return (
        <Grid container spacing={3}>
            <>
                {handleOptions(checked)}
            </>
            {options.map((e, i) => {
                return (
                    <Grid item xs={6}>
                        <label>
                            <input
                                type="radio"
                                class="nes-radio"
                                name={e}
                                onClick={handleClick}
                                checked={e === checked ? true : false}
                            />
                            <span>{e}</span>
                        </label>
                    </Grid>
                )
            })}
        </Grid>
    )
}


export default StrategyOptions