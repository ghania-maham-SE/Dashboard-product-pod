import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
const Private = () => {
    const authering = localStorage.getItem('token')
    return authering? <Outlet />:<Navigate  to={`/home/user/Login`} />
}

export default Private