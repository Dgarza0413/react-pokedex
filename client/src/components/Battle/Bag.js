import React from 'react'

const Bag = ({ show = true, setShow }) => {
    const modal = { display: `${show ? 'inline' : 'none'}` }
    const offModal = () => {
        setShow(false)
    }

    return (
        <div>
            <dialog
                style={modal}
                className={`nes-dialog is-rounded`}
                id="dialog-rounded">
                <form method="dialog">
                    <p onClick={offModal}>X</p>
                    <p class="title">Rounded dialog</p>
                    <p>Alert: this is a dialog.</p>
                    <menu className="dialog-menu">
                        <button className="nes-btn" onClick={offModal}>Cancel</button>
                        <button className="nes-btn is-primary">Confirm</button>
                    </menu>
                </form>
            </dialog>
        </div>
    )
}

export default Bag;
