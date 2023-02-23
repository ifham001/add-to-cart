import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartItem from './CartItem'





function Cart(props) {
    const cartCtx= useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;
    const addCartHandler =(item)=>{
        cartCtx.addItem({...item,amount:1})
    }
    const removeCartHandler=(id)=>{
        cartCtx.removeItem(id)

    }

  
  return (
    <Modal >
        <div  className={classes.cartitems}>
            {cartCtx.items.map(item=>{
                return <CartItem 
                                key ={item.id}
                                name={item.name}
                                price={item.price}
                                amount={item.amount}
                                onAdd={addCartHandler.bind(null,item)}
                                onRemove={removeCartHandler.bind(null,item.id)}/>
            })}
        </div>
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
        
    </Modal>
  )
}

export default Cart