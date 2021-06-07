import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = props => {
    const [ dmUser, setDmUser ] = useState({})

    const getDmUser = () => {
        const user_id = localStorage.getItem('user_id')
        return fetch(`http://localhost:8000/dmUser/${user_id}`, {
            method: 'GET',
            headers: {
                "Authorization": `Token ${localStorage.getItem("dm_user_id")}`,
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(setDmUser)
    }

    return (
        <AuthContext.Provider value={{
            dmUser,
            getDmUser
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}