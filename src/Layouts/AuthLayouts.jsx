import React from 'react'
import { Outlet } from 'react-router-dom'
import ParticlesBackground from '../Components/ParticleBackGround/ParticleBackGround'

function AuthLayouts() {
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