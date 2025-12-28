import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import Header from '../Components/Header/Header'
import { TemplateContextApi } from '../ContextApi/CreateContext'
import { Outlet } from 'react-router-dom'

function MainLayouts() {
    const [open, setOpen] = useState(false)
  return (
    <>
    <TemplateContextApi.Provider value={{ open, setOpen }}>
      <div className='bg-gray-100 dark:bg-zinc-700'>
        <SideBar />
        <div className='lg:ml-[250px] flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1 w-full p-5 lg:p-20 pt-20 overflow-auto'>
            <Outlet/>
          </main>
        </div>
      </div>
    </TemplateContextApi.Provider>
    </>
  )
}

export default MainLayouts