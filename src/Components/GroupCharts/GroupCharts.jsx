import React from 'react'
import ChartsBar from '../Charts/ChartsBar'
import TitlePage from '../TitlePage/TitlePage'
import { FiBarChart } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import Earning from './Earning';
function GroupCharts() {
    return (
        <>
            <div className='grid grid-cols-2 my-7 gap-6'>
                <div className='style-div'>
                    <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Earnings</h2>
                    <div>
                        <div>
                            <Earning />
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='style-div'>
                    <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Weekly Income</h2>
                    <div className='grid grid-cols-2'>
                        <ChartsBar />
                        <div className='border-2 border-solid border-zinc-200 rounded-md py-4 px-1'>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center gap-1'>
                                    <span className='bg-cyan-100 flexCenter size-12 rounded-full'>
                                        <FiBarChart size={20} color='#04aa6d' />
                                    </span>
                                    <div className='flex flex-col'>
                                        <h6 className='text-text1 mb-1 text-xs'>Total Sales</h6>
                                        <p className='font-Noto-SemiBold text-lg'>800</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className='mb-1 font-Noto-SemiBold text-lg'>-209</h6>
                                    <p className='flex items-center gap-1 text-red-500 font-Noto-SemiBold text-xs'>
                                        <span><FaArrowTrendUp size={17} /></span>
                                        30.9%
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupCharts