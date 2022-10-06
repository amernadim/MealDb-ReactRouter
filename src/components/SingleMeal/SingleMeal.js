import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleDetails from "../SingleDetails/SingleDetails";

const SingleMeal = () => {
  const meals = useLoaderData();
  console.log(meals);
  const singleMeal = meals.meals;
  // console.log(singleMeal);
  return (
   <div className="mt-[64px]"> 
    <div>
      <h2 className="text-2xl">Details of Meal</h2>
    </div>  
   <div>
    {
     singleMeal.map(smeal => <SingleDetails key={smeal.idMeal} smeal={smeal} ></SingleDetails> )
    }
   </div>
   </div>
  );
};

export default SingleMeal;
