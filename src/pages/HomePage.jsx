import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import HotDeals from '../components/hotdeals/HotDeals'
import Benifits from '../components/Benifits/Benifits'
import Review from '../components/review/Review'
import Devices from '../components/devices/Devices'
import Footer from '../components/footer/Footer'
import CompanyLogo from '../components/company-logo/CompanyLogo'

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Carousel />
    <HotDeals/>
  
      <Benifits />
      <Review />
      <CompanyLogo />
      <Devices />
      <Footer />
    </>
  )
}

export default HomePage