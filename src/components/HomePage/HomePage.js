import React, { useState, useCallback, useContext } from 'react';
import '../HomePage/HomePage.scss';
import { myContext } from '../Context/Context';
import { TfiYoutube } from 'react-icons/tfi';

import RecipeIndex from '../Index/RecipeIndex';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [show, setShow] = useState(false);
  const { fetchHomePageMeals, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePageMeals(searchTerm);
  }, [searchTerm, fetchHomePageMeals]);

  //fecth and display meals when search on the search bar

  return (
    <div className="home">
      <div className="home-search">
        <input
          type="text"
          placeholder="Find a recipe"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={fetchMealsHandler}>Search</button>
      </div>
      <div className="recipe-result-grid">
        {meals ? (
          meals.map((meal) => (
            <div className="recipe-result" key={meals.idmeal}>
              <img src={meal.strMealThumb} alt="#" />
              <a
                href={meal.strSource}
                target="_blank"
                rel="nooppener noreferrer"
              >
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
              {/*hide the ingredients on onClick */}
              <button
                className="ingredient-toggle-btn"
                onClick={() => setShow(!show)}
              >
                Ingredients
              </button>
              {show &&
                'active'(
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
          ))
        ) : (
          //display error text when typed item not found

          <h2>No Recipes found! Please try another word..</h2>
        )}
      </div>
      <div className="latest-recipes">
        <h3>Daily Recipes</h3>
        <RecipeIndex />
      </div>
    </div>
  );
}

export default HomePage;
