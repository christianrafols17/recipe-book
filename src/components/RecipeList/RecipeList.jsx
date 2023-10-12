import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Recipes from '../Recipes'

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
    axios.get(apiURL)
      .then((response) => {
        setRecipes(response.data.meals);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  )
}

export default RecipeList