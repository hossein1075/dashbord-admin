import React from 'react'
import { FaBars } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { MdNightlightRound } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { BiCommentDetail } from "react-icons/bi";
function NavDesktop() {
    return (
        <>
            <nav className='flex items-center justify-between py-2 px-10 bg-white'>
                <div className='flex gap-4'>
                    <button className='text-white bg-emerald-500 w-10 h-9 flexCenter rounded-md cursor-pointer'>
                        <FaBars />
                    </button>
                    <div className='relative bg-gray-100 h-9 flexCenter border-2 border-solid border-violet-200 rounded-md'>
                        <input type="text" className='w-full outline-none pl-7' placeholder='Search' />
                        <span className='absolute left-1'>
                            <IoSearchOutline size={20}/>
                        </span>
                    </div>
                </div>
                <div className='flex items-center'>
                    <button className='size-10 rounded-full flexCenter border-2 border-solid border-zinc-200 cursor-pointer'>
                        <MdOutlineLightMode size={20}/>
                    </button>
                    <button className='size-10 rounded-full flexCenter border-2 border-solid border-zinc-200 cursor-pointer ml-2'>
                        <BiCommentDetail size={20}/>
                    </button>
                    <div className='flex ml-5'>
                        <img src="/images/header/user2.png"  className='size-12 rounded-full' alt="profile" />
                        <div className='flex flex-col ml-2 cursor-pointer text-zinc-800'>
                            <span>Zoya Khan</span>
                            <span className='text-xs'>Admin</span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavDesktop