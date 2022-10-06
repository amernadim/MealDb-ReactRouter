import React from "react";
import { useNavigate } from "react-router-dom";

const MealItems = ({ meal }) => {
  // console.log(meal);
  const { idMeal, strMeal, strInstructions, strMealThumb } = meal;
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/meal/${idMeal}`);
  };
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={strMealThumb} alt="Meals" className="rounded-xl w-full" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{strMeal}!</h2>
        <p>{strInstructions.slice(0, 50)}</p>
        <div className="card-actions">
          <button onClick={handleNavigate} className="btn btn-sm btn-primary">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealItems;
