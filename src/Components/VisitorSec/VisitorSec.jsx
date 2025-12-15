import React from 'react'
import TitlePage from '../TitlePage/TitlePage'
import VisitorSecSvg from './VisitorSecSvg'
import { FaArrowTrendUp } from "react-icons/fa6";

function VisitorSec() {
    return (
        <>
            <div>
                <TitlePage text='' title='Visitors' />
                <div>
                    <div>
                        <VisitorSecSvg />
                    </div>
                    <div>
                        <div>
                            <h3>
                                75,900
                                <span>
                                    <span><FaArrowTrendUp/></span>
                                    12%
                                </span>
                            </h3>
                            <p>Overall Visitors</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VisitorSec