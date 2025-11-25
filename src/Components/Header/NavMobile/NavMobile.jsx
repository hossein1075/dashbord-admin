import React from 'react'
import { FaBars } from "react-icons/fa6";
function NavMobile() {
  return (
        <nav className='flex lg:hidden items-center justify-between py-2 px-5 bg-white'>
                        <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer'>
                            <FaBars />
                        </button>

                        <div>
                            <img src="/images/header/user2.png"  className='size-12 rounded-full' alt="profile" />
                        </div>
                </nav>
  )
}

export default NavMobile