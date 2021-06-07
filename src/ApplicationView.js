import React from 'react'
import { Route } from 'react-router-dom'
import { AuthProvider } from './Components/Auth/AuthProvider'


export const ApplicationViews = () => {
    return <>
    
        <main style={{
            margin: "5rem 2rem",
        }}>

        <AuthProvider>
            
        </AuthProvider>

        </main>    

    </>
}