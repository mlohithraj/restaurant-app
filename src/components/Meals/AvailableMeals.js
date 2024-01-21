import React from 'react'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const Dummy_Expense = [
    {
        id: 'm1',
        name: 'Vada Pav',
        description: 'A pav with one potata vada',
        price: 'Rs: 15'
    },
    {
        id: 'm2',
        name: 'Kothu Parotta',
        description: 'parotta mixed with chicken curry',
        price: 'Rs: 150'
    },
    {
        id: 'm3',
        name: 'Biriyani',
        description: 'A tendor authentic chicken biriyani',
        price: 'Rs: 230'
    },
    {
        id: 'm4',
        name: 'Shawarma',
        description: 'A chicken stuffed roll',
        price: 'Rs: 60'
    },
    
]

const AvailableMeals = () => {

    const mealAvailable = Dummy_Expense.map(meal =>
        <MealItem key={meal.id} 
        name={meal.name} description={meal.description} price={meal.price}/>
    )

  return (
    <Card>
    <section className={classes.mealsAvailable}>
        <ul className={classes.dummyMeal}>
        {mealAvailable}
        </ul>
        </section>
    </Card>
  )
}

export default AvailableMeals