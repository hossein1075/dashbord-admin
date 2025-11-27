import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
import { TemplateContextApi } from '../../ContextApi/CreateContext';
import { useTheme } from '../UseTheme/UseTheme';
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
function SideBar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024)

  
  const ContextData = useContext(TemplateContextApi)
  const { dark, darkHandler } = useTheme()
  useEffect(()=> {

    const resizeHandler = () => setIsDesktop(window.innerWidth >= 1024)

    window.addEventListener('resize', resizeHandler)
    return () => window.removeEventListener('resize', resizeHandler)
  },[])


  // <div class="transition-[left_0.3s_ease,width_0.3s_ease] ..."></div>

  return (
        <nav className={`w-62.5 h-screen fixed lg:left-0  bg-white shadow-[20px_0_20px_-20px_#d3d7e9] z-40 dark:bg-zinc-700 `} style={{ transform: isDesktop ? 'translateX(0) scale(1)' : ContextData.open ? 'translateX(0) scale(1)' : 'translateX(-260px) scale(0.95)' ,  opacity:
      isDesktop
        ? 1
        : ContextData.open
        ? 1
        : 0,  transition: 'transform 0.6s cubic-bezier(0.22,1,0.36,1), opacity 0.4s ease-in-out',}}>
    <div className='bg-emerald-500 p-2.5 mb-4 transition-all duration-500 ease-in-out'>
        <img src="/images/sidebar/logo.svg" className='h-11' alt="logo" />
      </div>
      <ul>
        <li className='mb-4 block lg:hidden'>
          <button onClick={() => ContextData.setOpen(false)} className={`flex items-center gap-2.5  py-1.75 px-3.75  text-sm text-zinc-800 dark:text-zinc-100`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500 `}>
              <IoMdCloseCircleOutline size={16} />
            </span>
            close
          </button>
        </li>
        <li className='mb-4 block lg:hidden'>
          <button onClick={darkHandler} className={`flex items-center gap-2.5 py-1.75 px-3.75  text-sm text-zinc-800 dark:text-zinc-100`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  `}>
              {dark ? <MdOutlineDarkMode size={20} /> : <MdOutlineLightMode size={16} />}
            </span>
            {dark ? 'dark' : 'light'}
          </button>
        </li>
        <li className='mb-4' onClick={() => ContextData.setOpen(false)}>
          <NavLink to='/home' className={({ isActive }) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/home' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <AiOutlineHome size={16} />
            </span>
            home
          </NavLink>
        </li>
        <li className='mb-4' onClick={() => ContextData.setOpen(false)}>
          <NavLink to='/users' className={({ isActive }) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/users' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <FaRegUser size={16} />
            </span>
            Users
          </NavLink>
        </li>
        <li className='mb-4' onClick={() => ContextData.setOpen(false)}>
          <NavLink to='/comments' className={({ isActive }) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/comments' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <FaRegComments size={16} />
            </span>
            Comments
          </NavLink>
        </li>
        <li className='mb-4' onClick={() => ContextData.setOpen(false)}>
          <NavLink to='/products' className={({ isActive }) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/products' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <AiOutlineShoppingCart size={16} />
            </span>
            Products
          </NavLink>
        </li>
        <li className='mb-4' onClick={() => ContextData.setOpen(false)}>
          <NavLink to='/task' className={({ isActive }) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm   ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/task' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <MdOutlineTaskAlt size={16} />
            </span>
            Task
          </NavLink>
        </li>
      </ul>


    </nav>
  )
}

export default SideBar