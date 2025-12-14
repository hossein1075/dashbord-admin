import React, { useContext } from 'react'
import { FaBars } from "react-icons/fa6";
import { TemplateContextApi } from '../../../ContextApi/CreateContext';

function NavMobile() {

  const ContextData = useContext(TemplateContextApi)


  return (
      <nav className='fixed top-0 left-0 lg:left-60 right-0 border-b-4 border-solid border-emerald-500 lg:border-none'>
    <div className='flex lg:hidden items-center justify-between py-2 px-5 dark:bg-zinc-700 bg-white'>
      <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer ' onClick={() => ContextData.setOpen(true)}>
        <FaBars />
      </button>
      <div>
        <img src="/images/header/user2.png" className='size-12 rounded-full' alt="profile" />
      </div>
    </div>
    </nav>
  )
}

export default NavMobile