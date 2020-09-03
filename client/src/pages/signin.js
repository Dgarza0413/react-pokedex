import React, { useRef, useState } from 'react';
import { signIn } from '../utils/API';
import API from '../utils/baseURL';

export default function Signin() {
    const name = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPW = useRef()
    const formEl = useRef()

    const handleSumbit = (e) => {
        e.preventDefault()
        if (password.current.value === confirmPW.current.value) {
            console.log("password matches")
            API.checkUser({
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            })
        } else {
            console.log("password does not match")
        }
    }

    return (
        <div
            style={
                {
                    maxWidth: '500px',
                    margin: 'auto'
                }
            }
            className="nes-container with-title"
        >
            <h1 className="title">Sign in</h1>
            <form
                onSubmit={handleSumbit}
                ref={formEl}
            >
                <div className="nes-field">
                    <label>name</label>
                    <input
                        className="nes-input"
                        name="username"
                        placeholder={"Pikachu"}
                        ref={name}
                    />
                </div>
                <div className="nes-field">
                    <label>email</label>
                    <input
                        className="nes-input"
                        name="email"
                        placeholder={"pikachu@pokeball.com"}
                        ref={email}
                    />
                </div>
                <div className='nes-field'>
                    <label>password</label>
                    <input
                        className="nes-input"
                        name="password"
                        placeholder={"something strong"}
                        type="password"
                        ref={password}
                    />
                </div>
                <div className="nes-field">
                    <label>confirm password</label>
                    <input
                        className="nes-input"
                        name="confirm"
                        placeholder={"like really strong"}
                        type="password"
                        ref={confirmPW}
                    />
                </div>
                <button
                    onClick={signIn}
                    style={{ margin: '10px 5px' }}
                    className="nes-btn is-primary"
                    type="submit"
                >Submit</button>
                <span class="nes-text is-success">No account? Sign Up here!</span>
            </form>
        </div>
    )
}
