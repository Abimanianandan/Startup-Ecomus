import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/carousel/Carousel'
import HotDeals from '../components/hotdeals/HotDeals'
import Benifits from '../components/benifits/Benifits'
import Review from '../components/review/Review'
import Devices from '../components/devices/Devices'
import Footer from '../components/footer/Footer'
import CompanyLogo from '../components/company-logo/CompanyLogo'
import Catagories from '../components/catagories/Catagories'
import BestSeller from '../components/bestseller/BestSeller'
import Scrollbar from '../components/scrollbar/Scrollbar'

const HomePage = () => {
  return (
    <>
      <Scrollbar />
      <Navbar />
      <Carousel />
      <HotDeals/>
      <Catagories/>
      <BestSeller/>
      <Benifits />
      <Review />
      <CompanyLogo />
      <Devices />
      <Footer />
    </>
  )
}

export default HomePage