import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../Context/Context';
import { TfiYoutube } from 'react-icons/tfi';

import './RecipeIndex.scss';

function RecipeIndex() {
  const { randomHomeMeal, fetchRandomHomeMeal } = useContext(myContext);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchRandomHomeMeal();
  }, [fetchRandomHomeMeal]);

  return (
    <div className="random">
      <div className="recipe-result-grid">
        {randomHomeMeal.map((meal) => (
          <div className="recipe-result" key={meal.idmeal}>
            <img src={meal.strMealThumb} alt="#" />
            <a href={meal.strSource} target="_blank" rel="nooppener noreferrer">
              Go to recipe..
            </a>
            <h4 className="meal-id">{meal.strMeal}</h4>
            <a
              className="youtube"
              href={meal.strYoutube}
              target="_blank"
              rel="nooppener noreferrer"
            >
              <TfiYoutube />
            </a>

            <button
              className="ingredient-toggle-btn"
              onClick={() => setShow(!show)}
            >
              Ingredients{' '}
            </button>

            {show && (
              <ul className="ingredient-list">
                <li className="ingredient">
                  {meal.strIngredient1}: {meal.strMeasure1}
                </li>
                <li>
                  {meal.strIngredient2} : {meal.strMeasure2}
                </li>
                <li>
                  {meal.strIngredient3} : {meal.strMeasure3}
                </li>
                <li>
                  {meal.strIngredient4} : {meal.strMeasure4}
                </li>
                <li>
                  {meal.strIngredient5} : {meal.strMeasure5}
                </li>
                <li>
                  {meal.strIngredient6} : {meal.strMeasure6}
                </li>
                <li>
                  {meal.strIngredient7} : {meal.strMeasure7}
                </li>
                <li>
                  {meal.strIngredient8} : {meal.strMeasure8}
                </li>
                <li>
                  {meal.strIngredient9} : {meal.strMeasure9}
                </li>
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecipeIndex;
