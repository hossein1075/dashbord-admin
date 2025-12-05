import React from 'react'
import { FiPieChart } from "react-icons/fi";
import { IoIosTrendingUp } from "react-icons/io";
function HomeBoxs() {
  return (
    <div className='flexCenter relative max-w-[274px] max-h-[140px] py-6 px-4 gap-3 border-2 rounded-md border-solid border-emerald-500 bg-emerald-100 text-emerald-500'>
        <div>
          <FiPieChart size={33}/>
        </div>
        <div className='flexCenter flex-col'>
          <h1 className='mb-2 text-4xl font-Noto-Medium font-medium '>3,020</h1>
          <h6>Weekly new visitors</h6>
          <div className='absolute top-1 right-1 border-2 rounded-lg py-1 px-1.75 border-solid border-emerald-500'>
            <IoIosTrendingUp size={10}/>
          </div>
        </div>

    </div>
  )
}

export default HomeBoxs