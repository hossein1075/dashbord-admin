import React from 'react'
import VisitorSecSvg from './VisitorSecSvg'
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosTrendingDown } from "react-icons/io";


const infoChart = [
    {id:1, price: 75900, icon: <FaArrowTrendUp size={20}/>, percent: '12%', color: 'text-emerald-500'},
    {id:2, price: 24800, icon: <FaArrowTrendUp size={20}/>, percent: '15%', color: 'text-emerald-500'},
    {id:3, price: 21900, icon: <FaArrowTrendUp size={20}/>, percent: '15%', color: 'text-emerald-500'},
    {id:4, price: 16800, icon: <IoIosTrendingDown size={20}/>, percent: '18%', color: 'text-red-500'},
]

function VisitorSec() {
    return (
        <>
            <div className='border-t-4 border-solid border-emerald-500 rounded-t-md bg-zinc-50 p-5 my-7'>
                  <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Visitors</h2>
                <div className='flex flex-col 2xl:flex-row items-center '>
                    <div className='hidden sm:block'>
                        <VisitorSecSvg />
                    </div>
                    <div className='grid gap-4 grid-cols-1 xs:grid-cols-2 md:grid-cols-4 2xl:grid-cols-2 2xl:justify-between w-full'>
                        {infoChart.map(item => (
                        <div key={item.id}>
                            <h3 className='flex gap-2 font-Noto-Bold font-bold'>
                                <span className='text-xl'>{item.price}</span>
                                <span className={`flex items-center gap-1 ${item.color}`}>
                                    <span>{item.icon}</span>
                                    {item.percent}
                                </span>
                            </h3>
                            <p className='text-neutral-800 text-xs'>Overall Visitors</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitorSec