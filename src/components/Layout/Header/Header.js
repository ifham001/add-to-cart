import React, { useContext } from 'react'
import CartContext from '../../../store/cart-context'
import CartButton from '../CartButton/CartButton'
import classes from './Header.module.css'



function Header(props) {
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  // const numberOfCartItems = items.reduce((curNumber, item) => 
  //           curNumber + item.amount
  // , 0);

  const numOfCartItems = items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  return (
    <div>
        
        <header className={classes.header}>
        <h1>ADD-TO-CART-LOGIC</h1>  
        <CartButton showCartItems={props.showCartItems} cart={numOfCartItems}/>
        </header>
       
        
    </div>
  )
}

export default Header

