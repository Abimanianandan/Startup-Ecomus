import React, { createContext, useState } from 'react'
import HomePage from './pages/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './components/shoppage/Shop'
import OrderManagement from './components/ordermanagement/OrderManagement'
import Cartpage from './components/cartpage/Cartpage';
import Wishlist from './components/wishlist/Wishlist';

export const cartContext = createContext();
const App = () => {
  const [cart,setCart] = useState(0)
  const [cartItem,setCartItem] = useState([]);
  const [heart,setHeart] = useState(0);
  const [heartItem,setHeartItem] = useState([]);
  return (
    <>
    <BrowserRouter>
    <cartContext.Provider value={{cart,setCart,cartItem,setCartItem,heart,setHeart,heartItem,setHeartItem}}>
       <Routes>
         <Route path="/" element={<HomePage />}/>
         <Route path='/shop' element={<Shop/>}/>
         <Route path='/ordermanagement' element={<OrderManagement/>}/>
         <Route path='/cart' element={<Cartpage />}/>
         <Route path='/heart' element={<Wishlist />}/>
       </Routes>
       </cartContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App