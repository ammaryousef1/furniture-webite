import React from 'react'

import { Routes , Route, Navigate } from 'react-router-dom';
import { Home  , Shop , Cart , ProductDetails , Checkout ,  } from '../pages/index'
const Routers = () => {
    
  return <Routes>
    <Route path='/' element={<Navigate to='home' />} />
    <Route path='home' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='shop/:id' element={<ProductDetails />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />

  </Routes>
}

export default Routers