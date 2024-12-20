import React from 'react'
import Navbar from '../navbar/Navbar'
import HotDeals from '../hotdeals/HotDeals'
import BestSeller from '../bestseller/BestSeller'

const Shop = () => {
  return (
    
    <>
    <div id="shoppage" >
    <Navbar/>
    <HotDeals/>
    <BestSeller/>
    </div>
    </>
  )
}

export default Shop