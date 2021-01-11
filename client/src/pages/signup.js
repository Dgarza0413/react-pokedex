import React from 'react';

import useInputChange from '../hooks/useInputChange';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Signin() {
    const [value, handleInputChange] = useInputChange();
    const [response, error, isLoading, handlePostFetch] = useFetch();
    const [handleLogin] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await handlePostFetch(value, '/api/signup')
            await handleLogin(token)
        } catch (error) {
            console.error(error, "submit process was unsuccessful")
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
            <h1 className="title">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="nes-field">
                    <label>name</label>
                    <input
                        className="nes-input"
                        name="username"
                        placeholder={"Pikachu"}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="nes-field">
                    <label>email</label>
                    <input
                        className="nes-input"
                        name="email"
                        placeholder={"pikachu@pokeball.com"}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='nes-field'>
                    <label>password</label>
                    <input
                        className="nes-input"
                        name="password"
                        placeholder={"something strong"}
                        onChange={handleInputChange}
                        type="password"
                    />
                </div>
                <div className="nes-field">
                    <label>confirm password</label>
                    <input
                        className="nes-input"
                        name="confirm"
                        placeholder={"like really strong"}
                        onChange={handleInputChange}
                        type="password"
                    />
                </div>
                <button
                    style={{ margin: '10px 5px' }}
                    className="nes-btn is-primary"
                    type="submit"
                >Submit</button>
            </form>
            <span className="nes-text is-success">Have An account? Login <Link to={'/login'}>Here</Link>!</span>
        </div>
    )
}
