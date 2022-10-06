import React from "react";

const SingleDetails = ({ smeal }) => {
  // console.log(smeal);
  const { strMealThumb, strInstructions, strMeal, strArea } = smeal;

  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <div className="card-body">
        <h2 className="card-title text-center">{strMeal}</h2>
        <p>{strInstructions.slice(0,100)}</p>
        <p> Area : {strArea}</p>
      </div>
      <figure>
        <img className="w-full" src={strMealThumb} alt="Meal" />
      </figure>
    </div>
  );
};

export default SingleDetails;
