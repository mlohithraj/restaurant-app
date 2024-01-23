import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

const Cart = (props) => {

    const cartItems = <ul className={classes['cart-items']}>{[{
        id: 'm1',
        name: 'roll',
        amount: '2',
        price: '70'
    }].map((items) =>
    <li>
        {items.name}
    </li>)}
    </ul>

  return (
    <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}> 
            <span>Total Amount</span>
            <span>40</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button-alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  )
}

export default Cart