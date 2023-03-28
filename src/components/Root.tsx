import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from './MainLayout'

const Root = () => {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  )
}

export default Root