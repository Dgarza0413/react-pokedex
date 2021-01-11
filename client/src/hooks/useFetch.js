import { useState } from 'react'

const useFetch = () => {
    const [response, setResponse] = useState()
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState()

    const postFetch = async (url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify({ ...data })
        });
        return response.json();
    }

    const handleGetFetch = async (url, payload) => {
        try {
            setIsLoading(true)
            const res = await fetch(url, { ...payload });
            const data = await res.json()
            await setResponse(data, { msg: "Get was successful" });
        } catch (error) {
            await setError(error, { msg: "error has occurred with fetching data" })
        } finally {
            setIsLoading(false)
        }
    }

    const handlePostFetch = async (value, url) => {
        try {
            setIsLoading(true)
            const res = await postFetch(url, value);
            await setResponse(res, { msg: "Post was successful" });
            return res
        } catch (error) {
            await setError(error, { msg: "error has occurred with posting data" })
        } finally {
            setIsLoading(false)
        }
    }

    return [response, error, isLoading, handlePostFetch, handleGetFetch]
}


export default useFetch
