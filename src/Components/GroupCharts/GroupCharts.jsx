import React from 'react'
import ChartsBar from '../Charts/ChartsBar'
import TitlePage from '../TitlePage/TitlePage'
import { FiBarChart } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import Earning from './Earning';

const incomeInformation = [
    {name:'Total Sales', rate: '800', price: '-$209', color: 'text-red-500', rateIcon: '30.9'},
    {name:'Revenue', rate: '6200', price: '+$980', color: 'text-emerald-500', rateIcon: '56.2'},
    {name:'Products', rate: '630', price: '+$46', color: 'text-emerald-500', rateIcon: '28.8'},
    {name:'Ads Spent', rate: '$380', price: '-$60', color: 'text-red-500', rateIcon: '49.3'},
    {name:'Expenses', rate: '890', price: '+$498', color: 'text-emerald-500', rateIcon: '3.9'},
]
function GroupCharts() {
    return (
        <>
            <div className='flex flex-col 2xl:flex-row w-full my-7 gap-6'>
                <div className='style-div basis-[40%]'>
                    <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Earnings</h2>
                    <div>
                        <div>
                            <Earning />
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className='style-div basis-[60%]'>
                    <h2 className='mb-2 text-lg font-Noto-SemiBold font-semibold'>Weekly Income</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2'>
                        <ChartsBar />
                        <div className='border-2 border-solid border-zinc-200 rounded-md py-4 px-1'>
                           {incomeInformation.map((item,index) => {
                            return (
                                 <div className='flex justify-between items-center mb-6'>
                                <div className='flex items-center gap-1'>
                                    <span className='bg-cyan-100 flexCenter size-12 rounded-full'>
                                        <FiBarChart size={20} color='#04aa6d' />
                                    </span>
                                    <div className='flex flex-col'>
                                        <h6 className='text-text1 mb-1 text-xs'>{item.name}</h6>
                                        <p className='font-Noto-SemiBold text-lg'>${item.rate}</p>
                                    </div>
                                </div>
                                <div>
                                    <h6 className='mb-1 font-Noto-SemiBold text-lg'>{item.price}</h6>
                                    <p className={`flex items-center gap-1 font-Noto-SemiBold text-xs ${item.color}`}>
                                        <span><FaArrowTrendUp size={17} /></span>
                                        {item.rateIcon}%
                                    </p>
                                </div>
                            </div>
                            )
                           })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GroupCharts