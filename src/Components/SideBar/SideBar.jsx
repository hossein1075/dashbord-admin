import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdOutlineTaskAlt } from "react-icons/md";
function SideBar() {

  // <div class="transition-[left_0.3s_ease,width_0.3s_ease] ..."></div>

  return (
    <nav className='w-62.5 h-screen fixed  bg-white shadow-[20px_0_20px_-20px_#d3d7e9] z-40 dark:bg-zinc-700'>
      <div className='bg-emerald-500 p-2.5 mb-4 '>
        <img src="/images/sidebar/logo.svg" className='h-11' alt="logo" />
      </div>
      <ul>
        <li className='mb-4'>
          <NavLink to='/home' className={({isActive}) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/home' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <AiOutlineHome size={16}/>
            </span>
            home
          </NavLink>
        </li>
        <li  className='mb-4'>
          <NavLink to='/users' className={({isActive}) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
           <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/users' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
             <FaRegUser size={16}/>
           </span>
            Users
          </NavLink>
        </li>
        <li className='mb-4'>
          <NavLink to='/comments' className={({isActive}) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
           <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/comments' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
             <FaRegComments size={16}/>
           </span>
            Comments
          </NavLink>
        </li>
        <li  className='mb-4'>
          <NavLink to='/products' className={({isActive}) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm  ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
            <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/products' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
              <AiOutlineShoppingCart size={16}/>
            </span>
            Products
          </NavLink>
        </li>
        <li  className='mb-4'>
          <NavLink to='/task' className={({isActive}) => `flex items-center gap-2.5 py-1.75 px-3.75  text-sm   ${isActive ? 'bg-gray-100 text-zinc-800' : 'text-zinc-800 dark:text-zinc-100'}`}>
           <span className={`size-9 rounded-lg flexCenter border-2 border-solid border-zinc-200 dark:bg-emerald-500  ${window.location.pathname === '/task' ? 'bg-emerald-500 text-zinc-100' : 'bg-zinc-100'}`}>
             <MdOutlineTaskAlt size={16}/>
           </span>
            Task
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default SideBar