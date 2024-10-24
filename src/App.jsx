import React from 'react'
import { Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route } from 'react-router-dom'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Wishlist' element={<Wishlist/>} />
      <Route path='/cart' element={<Cart/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
