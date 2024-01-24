import React from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = `${props.price}`;

  return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} items={props} />
        </div>
    </li>
  )
}

export default MealItem