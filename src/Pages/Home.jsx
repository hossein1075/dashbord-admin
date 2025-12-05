import React from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import Charts from '../Components/Charts/Charts'
import HomeBoxs from '../Components/HomeBoxs/HomeBoxs'


function Home() {
  return (
    <section className=''>
      <TitlePage title='Home' text='A collection of analytics showing your sales and orders data.' />
      <div className='mb-5 grid grid-cols-4 gap-3'>
        <HomeBoxs/>
        <HomeBoxs/>
        <HomeBoxs/>
        <HomeBoxs/>
      </div>
      <Charts/>
    </section>
  )
}

export default Home