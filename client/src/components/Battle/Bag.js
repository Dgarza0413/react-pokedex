import React, { useState } from 'react'

const Bag = () => {
    const [show, setShow] = useState(false)
    console.log(show)

    // const showModal = () => {
    //     setShow(!show)
    // }

    const modal = {
        display: `${show ? 'inline' : 'none'}`
    }
    return (
        <div>
            <button
                type="button"
                class="nes-btn is-primary"
                onClick={() => setShow(!show)}>
                Open rounded dialog
  </button>
            <dialog
                style={modal}
                className={`nes-dialog is-rounded`}
                id="dialog-rounded">
                <form method="dialog">
                    <p class="title">Rounded dialog</p>
                    <p>Alert: this is a dialog.</p>
                    <menu class="dialog-menu">
                        <button class="nes-btn">Cancel</button>
                        <button class="nes-btn is-primary">Confirm</button>
                    </menu>
                </form>
            </dialog>
        </div>
    )
}

export default Bag;
