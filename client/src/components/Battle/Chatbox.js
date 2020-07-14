import React from 'react'

const Chatbox = ({ messages }) => {
    return (
        <section className="nes-container">
            <section className="message-list">
                {messages.length > 0 && messages.map((e, i) => {
                    return (
                        <section key={i} className="message -left">
                            <div className="nes-balloon from-left">
                                <p>{e.name}</p>
                            </div>
                        </section>
                    )
                })}
                <section className="message -right">
                    <div className="nes-balloon from-right">
                        <p>Good morning. Thou hast had a good night's sleep, I hope.</p>
                    </div>
                    <i className="nes-bcrikko"></i>
                </section>
            </section>
        </section>
    )
}

export default Chatbox 