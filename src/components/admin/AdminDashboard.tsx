import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navigation from './Navigation'
const AdminDashboard = () => {
  return (
    <div>
        <Navigation />
        <Outlet />
    </div>
  )
}

export default AdminDashboard