
import React, { useState } from 'react'
import Cart from './components/Cart/Cart'
import Header from './components/Layout/Header/Header'
import Meals from './components/Meals/Meals'
import CartProvider from './store/CartProvider'
 
function App() {
  const [showCart,setShowCart]=useState(false)
  const onClickShowCartItems = ()=>{
    setShowCart(true)

  }
  const closeCartHandler =()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
      <Header showCartItems={onClickShowCartItems}/>
      <Meals/>
     {showCart&& <Cart onClose={closeCartHandler}/>}
     </CartProvider>
  )
}

export default App