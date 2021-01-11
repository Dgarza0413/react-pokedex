import React, { useContext } from 'react';

import { UserContext } from '../utils/UserContext';

import { Link } from 'react-router-dom';

import useInputChange from '../hooks/useInputChange';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';

export default function Login() {
    const [state, setState] = useContext(UserContext)

    const [value, handleInputChange] = useInputChange();
    const [response, error, isLoading, handlePostFetch] = useFetch();
    const [handleLogin] = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const token = await handlePostFetch(value, '/api/login')
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
            <h1 className="title">Sign in</h1>
            <form onSubmit={handleSubmit}>
                <div className="nes-field">
                    <label>Username</label>
                    <input
                        className="nes-input"
                        name="username"
                        placeholder={"Pikachu"}
                        onChange={handleInputChange}
                    />
                </div>
                {/* <div className="nes-field">
                    <label>email</label>
                    <input
                        className="nes-input"
                        name="email"
                        placeholder={"pikachu@pokeball.com"}
                        onChange={handleInputChange}
                    />
                </div> */}
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
                {/* <div className="nes-field">
                    <label>confirm password</label>
                    <input
                        className="nes-input"
                        name="confirm"
                        placeholder={"like really strong"}
                        onChange={handleInputChange}
                        type="password"
                    />
                </div> */}
                <button
                    style={{ margin: '10px 5px' }}
                    className="nes-btn is-primary"
                    type="submit"
                >Submit</button>
                {/* {
                    isLoading
                        ? <i class="nes-pokeball"></i>
                        : ""
                } */}

            </form>
            <span className="nes-text is-success">No account? Sign Up
            <Link to={'/signup'}>
                    here!
            </Link>
            </span>
        </div>
    )
}
