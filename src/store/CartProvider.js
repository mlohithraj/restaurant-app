import React, { useState } from 'react'
import CartContext from './cart-context'


const CartProvider = (props) => {

    const [items, updateItems] =useState([])

    const addItemToCartHandler = (item) => {
        updateItems([...items, item])
        console.log('inside addlistener', cartContext)
    };

    const removeItemToCartHandler = (props) => {};

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
        message: 'Iam accesible',
    }

  return (
    <CartContext.Provider value={cartContext}>
        {console.log('inside cartcotext.provider',cartContext)}
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;