import React, { useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartCntx = useContext(CartContext);

  const combinedItems = cartCntx.items.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.name === item.name);

    if (existingItem) {
      existingItem.quantity += 1; 
      existingItem.totalPrice += parseFloat(item.price.replace('Rs: ', ''));
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: parseFloat(item.price.replace('Rs: ', '')) }); 
    }
    return acc;
  }, []);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {combinedItems.map((item) => (
        <li key={item.id}>
          Name: {item.name} - Quantity: {item.quantity} - Total Price: Rs: {item.totalPrice.toFixed(2)}
        </li>
      ))}
    </ul>
  );

  const totalAmount = combinedItems.reduce(
    (total, item) => total + item.totalPrice * item.quantity,
    0
  ).toFixed(2);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>Rs:{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button-alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;



