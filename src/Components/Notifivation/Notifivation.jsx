import React from 'react'
import { FaArrowTrendUp } from "react-icons/fa6";

function Notifivation() {
    return (
        <>
            <div>
                <div>
                    <h6>Total Sales</h6>
                    <p>800</p>
                </div>
                <div>
                    <h6>-209</h6>
                    <p>
                        <span><FaArrowTrendUp /></span>
                        30.9%
                    </p>
                </div>
            </div>
        </>
    )
}

export default Notifivation