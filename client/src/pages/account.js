import React, { useEffect } from 'react';
import cookie from 'js-cookie';
import useFetch from '../hooks/useFetch';
import useAuth from '../hooks/useAuth';

import './styles.css';

const Account = () => {
    const [response, error, isLoading, { }, handleGetFetch] = useFetch();
    const { handleRedirect } = useAuth();

    const handleAccountInfo = async () => {
        try {
            const token = await cookie.get('token')
            const payload = {
                method: 'GET',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            }
            if (token) {
                await handleGetFetch("/api/user", { ...payload })
            } else {
                new Error("no token present redirecting")
                return handleRedirect()
            }
        } catch (error) {
            console.error(error, "error has occurred with getting account info, DON'T PANIC!!")
        }

    }

    useEffect(() => {
        handleAccountInfo()
    }, [])
    return (
        <div>
            This is the account page

            <span>component for current pokemon list</span>
            <span>component for all pokemon</span>

            <div className="nes-container is-rounded side-bar">
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>POKeDEX</span>
                </label>

                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>POKeMON</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>ITEM</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>MET</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>SAVE</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>OPTION</span>
                </label>
                <label>
                    <input type="radio" className="nes-radio" name="answer" />
                    <span>EXIT</span>
                </label>
            </div>
        </div>
    )
}

export default Account
