import { api } from '../services/api'
import React, { createContext, useState, useEffect} from 'react';

import history from '../history'

const Context = createContext();

function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({id: '', firstName: '',lastName: '', email: '',avatar_url:'' });

    useEffect(() =>{
        const token = localStorage.getItem('dcatoken')

        if (token){
            setAuthenticated(true);
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
        }

        setLoading(false);
    }, [])

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };
    async function handleLogin(data){
        var email = data.email;
        var password = data.password;
        const response = await api({
            method: 'post',
            url: '/singIn',
            data: {
                email, 
                password
            }
        })

        setAuthenticated(true)
        const parseToken = await parseJwt(response.data);
        localStorage.setItem('dcatoken', JSON.stringify(parseToken.sub));
        api.defaults.headers.Authorization = `Bearer ${parseToken.sub}`;    
        
        history.push('/home')
    }
    function handleLogout(){
        setAuthenticated(false)
        localStorage.remove('dcatoken');
        api.defaults.headers.Authorization = undefined;
        history.push('/login') 
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return ( 
        <Context.Provider value={{ authenticated, handleLogin, handleLogout, user }}>
            { children }  
        </Context.Provider>
    )
}

export { Context, AuthProvider }