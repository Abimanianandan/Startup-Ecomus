import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import HotDeals from '../components/hotdeals/HotDeals'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    <HotDeals/>
    <div>HomePage</div>
    <h1>Hello world</h1>
    </>
  )
}

export default HomePage