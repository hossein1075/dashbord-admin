import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import ParticlesBackground from '../Components/ParticleBackGround/ParticleBackGround'

function AuthLayouts() {
  const isLoggedIn = localStorage.getItem('isLoggedIn')

  if(isLoggedIn === 'true') {
    return <Navigate to='/home' replace/>
  } 
  return (
    <>
    <ParticlesBackground/>
     <div className="min-h-screen flex items-center justify-center">
      <Outlet />
    </div>
    </>
  )
}

export default AuthLayouts