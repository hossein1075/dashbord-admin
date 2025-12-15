import React from 'react'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000,},
  { name: 'Feb', uv: 3000,},
  { name: 'Mar', uv: 2000,},
  { name: 'Apr', uv: 2780,},
  { name: 'May', uv: 1890,},
]

function ChartsBar({ isAnimationActive = true }) {
    return (
        <>
            <div>
                <BarChart style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }} responsive data={data}>
                    <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={isAnimationActive} />
                </BarChart>
            </div>
        </>
    )
}

export default ChartsBar