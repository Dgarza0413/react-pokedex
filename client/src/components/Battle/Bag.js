import React, { useState } from 'react'

const Bag = ({ show = true, setShow }) => {
    console.log(show)

    const modal = { display: `${show ? 'inline' : 'none'}` }
    return (
        <div>
            <dialog
                style={modal}
                className={`nes-dialog is-rounded`}
                id="dialog-rounded">
                <form method="dialog">
                    <p class="title">Rounded dialog</p>
                    <p>Alert: this is a dialog.</p>
                    <menu className="dialog-menu">
                        <button className="nes-btn">Cancel</button>
                        <button className="nes-btn is-primary">Confirm</button>
                    </menu>
                </form>
            </dialog>
        </div>
    )
}

export default Bag;
