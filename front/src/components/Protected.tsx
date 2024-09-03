import React, { useEffect, useState } from 'react'
import { api } from '../libs/api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../libs/constants';
import { jwtDecode } from 'jwt-decode';
import { Navigate } from 'react-router-dom';

export default function Protected({ children }) {

    const [isAuth, setIsAuth] = useState<boolean | null>(null);

    useEffect(() => {
        checkAuth();
    }, [])

    const checkAuth = async () => {
        const access = localStorage.getItem(ACCESS_TOKEN)
        if (!access) {
            setIsAuth(false);
            return
        }
        return await checkAccessExpiration(access)

    }

    const checkAccessExpiration = async (accessToken) => {
        const decoded = jwtDecode(accessToken)
        const exprDate = decoded.exp
        const now = Date.now()
        console.log("Token expiration date is : ", new Date(exprDate).toDateString())
        if (exprDate > (now / 1000)) {
            setIsAuth(true)
            return true
        }

        else { await refreshToken() }
    }

    function saveTokens(data) {
        console.log("Refreshed tokens! ")
        localStorage.setItem(ACCESS_TOKEN, data[ACCESS_TOKEN])
        localStorage.setItem(REFRESH_TOKEN, data[REFRESH_TOKEN])

    }

    const refreshToken = async () => {
        try {
            api.post('/api/token/refresh/', { data: localStorage.get(REFRESH_TOKEN) })
                .then(data => {
                    saveTokens(data);
                    setIsAuth(true)
                })
                .catch(e => setIsAuth(false))

            return true
        }
        catch (error) {
            setIsAuth(false)
            return false
        }

    }

    const comp = isAuth == null ?
        <div>Loading ...</div> :
        (isAuth == true ? <>{ children }</> :
            <Navigate to="/login" />)

    return comp

}
