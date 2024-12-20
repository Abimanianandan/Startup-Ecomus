import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/shoppage/Shop'
import OrderManagement from './components/ordermanagement/OrderManagement'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/ordermanagement' element={<OrderManagement/>}/>
       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App