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
    <TemplateContextApi.Provider value={{ open, setOpen }}>
      <div className='flex min-h-screen bg-gray-100 dark:bg-zinc-700'>
        <SideBar />
        <div className='flex-1 flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 w-full p-5 lg:p-20 pt-20'>{route}</main>
        </div>
      </div>
    </TemplateContextApi.Provider>
  )
}

export default App
