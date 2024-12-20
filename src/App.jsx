import React from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/shoppage/Shop'
import WhatsAppRedirect from './components/whatsappredirection/WhatsAppRedirect'

const App = () => {
  return (
    <>
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/whatsappredirect' element={<WhatsAppRedirect/>}/>

       </Routes>
    </BrowserRouter>
    </>
  )
}

export default App