import React, {useContext} from 'react'
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input'
import CartContext from '../../../store/cart-context'

const MealItemForm = (props) => {

  const cartCntx = useContext(CartContext)
  console.log('re cart', cartCntx)
  const addItemToCart = (event) =>{
    event.preventDefault();
    // cartCtx.items.push(props.items)
    const quantity = document.getElementById('amount_' +props.id).value;
    cartCntx.addItem({...props.items, quantity})
    console.log('Added to cart', cartCntx)
  }

  return (
    <form className={classes.form}>
      {console.log('inside render',cartCntx)}
        <Input label='Amount' input={{
            id: 'amount_' +props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button onClick={addItemToCart}>+ Add</button>
    </form>
  )
}

export default MealItemForm