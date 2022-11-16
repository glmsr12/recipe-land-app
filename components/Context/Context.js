import React, { createContext, useCallback, useState } from 'react';
import axios from 'axios';

export const myContext = createContext();

export const AppContext = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [randomMeal, setRandomMeal] = useState([]);
  const [randomHomeMeal, setRandomHomeMeal] = useState([]);
  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchHomePageMeals = useCallback((searchTerm) => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
      .then((res) => {
        console.log(res.data.meals);
        setMeals(res.data.meals);
      });
  }, []);

  const fetchFavorites = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v2${API_KEY}latest.php`)
      .then((res) => {
        console.log(res.data.meals);
        setFavorites(res.data.meals);
      });
  }, []);

  const fetchRandomMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandomMeal(res.data.meals);
      });
  }, []);

  const fetchRandomHomeMeal = useCallback(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)
      .then((res) => {
        console.log(res.data.meals);
        setRandomHomeMeal(res.data.meals);
      });
  }, []);

  return (
    <myContext.Provider
      value={{
        fetchHomePageMeals,
        meals,
        fetchFavorites,
        favorites,
        fetchRandomMeal,
        randomMeal,
        fetchRandomHomeMeal,
        randomHomeMeal,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
