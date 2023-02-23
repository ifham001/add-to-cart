import React, { useReducer } from 'react'   
import CartContext from './cart-context'

 const reducerFunc =(state,action)=>{
    if(action.type==='Add'){
        const SumAmount = action.item.amount * action.item.price + state.totalAmount;

        const existingCartItemIndex = state.items.findIndex(item=>
            item.id=== action.item.id
        )
        const existingCartItem = state.items[existingCartItemIndex]
        let updatedItem;
        if(existingCartItem){
            const updatedItems ={...existingCartItem,amount:existingCartItem.amount + action.item.amount}
            updatedItem = [...state.items]
            updatedItem[existingCartItemIndex] = updatedItems


      
        }  
        else{
            updatedItem = state.items.concat(action.item) 
        }




        return {
            items:updatedItem,
            totalAmount:SumAmount
        }

    }
    if(action.type==='Remove'){

        const existingCartItemIndex = state.items.findIndex(item=>
            item.id=== action.id
        )
        const existingCartItem = state.items[existingCartItemIndex]
        const updatedAmount = state.totalAmount - existingCartItem.price

        let updatedItems;
        if(existingCartItem.amount===1){
            updatedItems = state.items.filter(item=>
                item.id !== action.id
            )
        }
        else{
          const   updatedItem = {...existingCartItem,amount:existingCartItem.amount-1}
            updatedItems =[...state.items]
            updatedItems[existingCartItemIndex] =updatedItem
        }

        return {
            items:updatedItems,
            totalAmount:updatedAmount
        }

    }
    return initalValue;
 }

const initalValue ={
    items:[],
    totalAmount:0
 }



function CartProvider(props) {
    const [setValue,dispatchValue] =useReducer(reducerFunc,initalValue)

    const addItem =item=>{
        dispatchValue({type:'Add',item:item})
    }
    const removeItem =id=>{
        dispatchValue({type:'Remove',id:id})
    }

  const Context = {
    items:setValue.items,
    totalAmount:setValue.totalAmount,
    addItem: addItem,
    removeItem: removeItem
  }
  return (
    <CartContext.Provider value={Context}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider