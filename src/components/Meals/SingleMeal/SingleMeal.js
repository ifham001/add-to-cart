import React, { useContext, useState } from 'react'
import CartContext from '../../../store/cart-context'
import Card from '../../UI/Card/Card'




function SingleMeal(props) {
    const cartCtx = useContext(CartContext)
    const [amount,setAmount]=useState()
    
    
    
    const getAmount =e=>{
        const num = +e.target.value
        setAmount(num)
        
        
        
        
        
          

    }
    const onSubmit=e=>{
        e.preventDefault()
        console.log(typeof amount)
        
        
        
        
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            price:props.price,
            amount:amount
        })
    }
  return (
    <Card
        
        key={props.id}
        name={props.name}
        price={props.price}
        description={props.description}
        amount={getAmount}
        onSubmit={onSubmit}/>
  )
}

export default SingleMeal