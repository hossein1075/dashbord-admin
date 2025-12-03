import React from 'react'
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis, PieChart, Pie } from 'recharts';

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
const data01 = [
    { name: 'Buy - Mobile', value: 120 },
    { name: 'Buy - Laptop', value: 80 },
    { name: 'Buy - Headphones', value: 45 },
    { name: 'Buy - Monitor', value: 60 },
    { name: 'Buy - Keyboard', value: 30 },
];

const data02 = [
    { name: 'Sell - Mobile', value: 200 },
    { name: 'Sell - Laptop', value: 150 },
    { name: 'Sell - Headphones', value: 90 },
    { name: 'Sell - Monitor', value: 110 },
    { name: 'Sell - Keyboard', value: 70 },
];
function Charts() {
    return (
        <div className='border-t-4 border-solid border-emerald-500 flex justify-between mt-10 rounded-t-md'>
            <LineChart
                style={{ width: '100%', aspectRatio: 1.618, maxWidth: 700, padding: '16px', background: '#FAFAFA' }}
                responsive
                data={data}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 5,
                    left: 0,
                }}
            >
                {/* <CartesianGrid stroke="#aaa" strokeDasharray="5 5" /> */}
                <Line type="monotone" dataKey="Visitors" stroke="#7f3dff" strokeWidth={2} name="Visitors" />
                <Line type="monotone" dataKey="Orders" stroke="#ff3d3d" strokeWidth={2} name="Orders" />
                <XAxis dataKey="name" />
                <YAxis width="auto" label={{ value: '', position: 'insideCenter', angle: -90 }} />
                <Legend align="right" />
                <Tooltip />
            </LineChart>

            <PieChart
                style={{ width: '100%', maxWidth: '400px', maxHeight: '80vh', aspectRatio: 1, padding: '16px', background: '#FAFAFA' }}
                responsive
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
            >
                <Pie
                    data={data01}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="50%"
                    fill="#8884d8"
                // isAnimationActive={isAnimationActive}
                />
                <Pie
                    data={data02}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="80%"
                    fill="#82ca9d"
                    label
                // isAnimationActive={isAnimationActive}
                />
            </PieChart>
        </div>
    )
}

export default Charts