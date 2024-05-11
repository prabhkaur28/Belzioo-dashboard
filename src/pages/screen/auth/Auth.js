import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import EditProfile from './components/Editprofile/EditProfile'
import Login from './components/login/Login'
import LogOut from './components/logout/LogOut'
import Register from './components/register/Register'

const Auth = () => {
    return (
        <Fragment>
            <EditProfile />
            <Login />
            <Register/>
            <LogOut />
        </Fragment>
    )
}

export default Auth
