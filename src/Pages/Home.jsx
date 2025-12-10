import React from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import Charts from '../Components/Charts/Charts'
import HomeBoxs from '../Components/HomeBoxs/HomeBoxs'
import colorBox from '../Components/HomeBoxs/ColorBox'

function Home() {
  return (
    <section className=''>
      <TitlePage title='Home' text='A collection of analytics showing your sales and orders data.' />
      <div className='mb-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  justify-between gap-3'>
        {colorBox.map(item => (
        <HomeBoxs key={item.id} {...item}/>
        ))}
      </div>
      
      <Charts/>
    </section>
  )
}

export default Home