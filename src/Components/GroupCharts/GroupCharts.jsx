import React from 'react'
import ChartsBar from '../Charts/ChartsBar'
import TitlePage from '../TitlePage/TitlePage'
import { FiBarChart } from "react-icons/fi";
import { FaArrowTrendUp } from "react-icons/fa6";
import Notifivation from '../Notifivation/Notifivation';
function GroupCharts() {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div>
                    <TitlePage title='Notifications' text='' />
                    <Notifivation/>
                </div>
                <div>
                    <TitlePage title='Weekly Income' text='Highest income generated on Friday.' />
                    <div className='grid grid-cols-2'>
                        <ChartsBar />
                        <div>
                            <div>
                                <FiBarChart />
                            </div>
                            <div>
                                <div>
                                    <h6>Total Sales</h6>
                                    <p>800</p>
                                </div>
                                <div>
                                    <h6>-209</h6>
                                    <p>
                                        <span><FaArrowTrendUp/></span>
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