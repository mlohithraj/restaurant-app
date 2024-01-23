import React, { Fragment } from 'react'
import mealsImage from '../../components/assets/meal.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
      <div className={classes.summary}>
        <h1>Delicious Food, Delivered to you</h1>
        <div className={classes.paragraph}>
        <p>Choose your favourite meal from our broad section of available meals and enjoy a delicious lunch or dinner at home</p>
        <p>All our meals are cooked with high quality ingredients, just in time and of course by <br/> experienced chefs!</p>
        </div>
      </div>
    </Fragment>
  )
}

export default Header;