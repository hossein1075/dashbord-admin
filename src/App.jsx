import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import routes from './router'
import { useRoutes } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'
import { TemplateContextApi } from './ContextApi/CreateContext'

function App() {
let route = useRoutes(routes)
const [open, setOpen] = useState(false)

  return (
    <>
    <TemplateContextApi.Provider value={{open, setOpen}}>
    <div className='flex'>
    <SideBar/>
    <div className='flex-1 lg:ml-50'>
    <Header/>
    <div className='lg:p-20 p-5 pt-20 dark:bg-zinc-700'>
      {route}
    </div>
    </div>
    </div>
    </TemplateContextApi.Provider>
    </>
  )
}

export default App
