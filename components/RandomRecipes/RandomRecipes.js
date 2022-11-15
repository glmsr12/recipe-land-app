import React, { useEffect, useContext } from 'react';
import { myContext } from '../Context/Context';
import '../RandomRecipes/RandomRecipes.scss';

function RandomRecipes() {
  const { randomMeal, fetchRandomMeal } = useContext(myContext);

  useEffect(() => {
    fetchRandomMeal();
  }, [fetchRandomMeal]);

  return (
    <div className="random">
      {randomMeal.map((meal) => (
        <div className="random-grid" key={randomMeal.idMeal}>
          <div className="random-grid-item">
            <h2 className="meal-id">{meal.strMeal}</h2>
            <a href={meal.strSource} target="_blank" rel="nooppener noreferrer">
              {' '}
              <img src={meal.strMealThumb} alt="#" />
            </a>

            <button onClick={fetchRandomMeal}>Get Daily Random Recipes</button>
            <ul className="ingredient-list">
              <h3> Ingredients</h3>
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
            </ul>
          </div>
          <div className="random-instruction">
            <h2>Instructions</h2>

            <p className="instruction">{meal.strInstructions}</p>
          </div>
          <div className="video-link">
            <a
              className="youtube"
              href={meal.strYoutube}
              target="_blank"
              rel="nooppener noreferrer"
            >
              Check out the recipe video..
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RandomRecipes;
