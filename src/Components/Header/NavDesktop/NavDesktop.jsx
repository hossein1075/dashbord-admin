import React, { useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
import { useTheme } from '../../UseTheme/UseTheme';
import { Link } from 'react-router-dom';
function NavDesktop() {
    const {dark, darkHandler} = useTheme()
   
    return (
        <>
            <nav className='fixed top-0 left-60 right-0 border-b-4 border-solid border-emerald-500 z-40'>
                <div className='hidden lg:flex items-center justify-between py-2 px-10  bg-white dark:bg-zinc-700'>
                    <div>
                        <div className='relative bg-gray-100 h-9 flexCenter border-2 border-solid dark:border-violet-600 border-violet-200 rounded-md'>
                            <input type="text" className='w-full outline-none pl-7' placeholder='Search' />
                            <span className='absolute left-1'>
                                <IoSearchOutline size={20} />
                            </span>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <button onClick={darkHandler} className='size-10 rounded-full flexCenter dark:bg-zinc-50 border-2 border-solid border-zinc-200 cursor-pointer'>
                            {dark ? <MdNightlightRound size={20} /> : <MdOutlineLightMode size={20} />}
                        </button>
                        <Link to='/comments' className='size-10 rounded-full flexCenter dark:bg-zinc-50 border-2 border-solid border-zinc-200 cursor-pointer ml-2'>
                            <BiCommentDetail size={20} />
                        </Link>
                        <div className='flex ml-4'>
                            <img src="/images/header/user2.png" className='size-12 rounded-full' alt="profile" />
                            <div className='flex flex-col ml-2 cursor-pointer text-zinc-800 dark:text-zinc-100'>
                                <span className='font-Noto-SemiBold'>Zoya Khan</span>
                                <span className='text-xs'>Admin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop