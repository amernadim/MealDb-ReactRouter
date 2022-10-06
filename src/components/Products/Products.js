import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import MealItems from '../MealItems/MealItems';

const Products = () => {
 const meals = useLoaderData();
  const meal = meals.meals;
  return (
    <div className='mt-[70px]'>
      <div>
      <h1 className='text-2xl mt-5 font-bold'>Meal Quantity : {meal.length}</h1>
     <div className='grid md:grid-cols-3 gap-3 mt-3 w-9/12 mx-auto'>
     {
        meal.map(meal => <MealItems 
          key={meal.idMeal}
          meal={meal}
        ></MealItems>)
      }
     </div>
    </div>
    </div>
  );
};

export default Products;