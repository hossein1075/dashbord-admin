import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'

function App() {
let route = useRoutes(routes)

  return (
    <>
    <div className='flex'>
    <SideBar/>
    <div className='flex-1 ml-50'>
    <Header/>
    <div className='p-20'>
      {route}
    </div>
    </div>
    </div>
    </>
  )
}

export default App
