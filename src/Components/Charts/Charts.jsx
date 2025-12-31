import React from 'react'
import { ResponsiveContainer, Legend, Line, LineChart, Tooltip, XAxis, YAxis,} from 'recharts';

const data = [
    {
        name: 'Jan',
        Visitors: 25,
        Orders: 18
    },
    {
        name: 'Feb',
        Visitors: 34,
        Orders: 30
    },
    {
        name: 'Mar',
        Visitors: 71,
        Orders: 20
    },
    {
        name: 'Apr',
        Visitors: 12,
        Orders: 10
    },
    {
        name: 'May',
        Visitors: 41,
        Orders: 32
    },
    {
        name: 'Jun',
        Visitors: 45,
        Orders: 40
    },
    {
        name: 'Jul',
        Visitors: 38,
        Orders: 37
    },
    {
        name: 'Aug',
        Visitors: 60,
        Orders: 42
    },
    {
        name: 'Sep',
        Visitors: 34,
        Orders: 30
    },
    {
        name: 'Oct',
        Visitors: 46,
        Orders: 40
    },
    {
        name: 'Nov',
        Visitors: 28,
        Orders: 14
    },
    {
        name: 'Dec',
        Visitors: 78,
        Orders: 50
    },
];

function Charts() {
    return (
       
            <div className='style-div rounded-t-md'>
                <div className="chart-box">
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
                            <Line type="monotone" dataKey="Visitors" stroke="#7f3dff" strokeWidth={2} />
                            <Line type="monotone" dataKey="Orders" stroke="#ff3d3d" strokeWidth={2} />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
       
    )
}

export default Charts