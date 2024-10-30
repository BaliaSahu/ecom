import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop.jsx'
import ShopCategory from './pages/ShopCategory.jsx'
import Product from './pages/Product.jsx'
import LoginSignup from './pages/LoginSignup.jsx'
import Cart from './pages/Cart.jsx'
import Footer from './components/footer/Footer.jsx'
import ShopContextProvider from './context/ShopContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Shop></Shop>} />
          <Route path='/mens' element={<ShopCategory text='MENS FASHION' category="men"></ShopCategory>} />
          <Route path='/women' element={<ShopCategory text='WOMEN FASHION' category="women"></ShopCategory>} />
          <Route path='/kid' element={<ShopCategory text='KIDS FASHION' category="kids"></ShopCategory>} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}></Route>
          </Route>
          <Route path='/login' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
