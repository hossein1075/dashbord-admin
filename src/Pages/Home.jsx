import React from 'react'
import TitlePage from '../Components/TitlePage/TitlePage'
import Charts from '../Components/Charts/Charts'


function Home() {
  return (
    <section>
      <TitlePage title='Home' text='A collection of analytics showing your sales and orders data.' />
      <Charts/>
    </section>
  )
}

export default Home