import cookie from 'js-cookie';
import { useHistory } from 'react-router-dom';

import useFetch from './useFetch';

const useAuth = () => {
    const [handleGetFetch] = useFetch();
    const history = useHistory()

    const handleLogin = (token) => {
        cookie.set("token", token)
        history.push("/")
    }

    const handleRedirect = () => {
        history.push('/login')
    }

    const handleLogout = () => {
        cookie.remove('token');
        window.localStorage.setItem('logout', Date.now())
        history.push('/login');
    }

    return [handleLogin, handleLogout, handleRedirect]
}

export default useAuth