import React, { useState } from 'react'
import Navbar from './componets/Navbar/Navbar'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Placeorder from './pages/PlaceOrder/Placeorder'
import Footer from './componets/Footer/Footer'
import LoginPopup from './componets/LoginPopup/LoginPopup'
import AppDownload from './componets/AppDownload/AppDownload'

function App() {
  const [showLogin,setshowLogin] =useState(false);
  return (
    <>
    {showLogin?<LoginPopup setshowLogin={setshowLogin}/>:<></>}
    <div className='app'>
      <Navbar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>
        <Route path='/app' element={<AppDownload/>}/>

      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
