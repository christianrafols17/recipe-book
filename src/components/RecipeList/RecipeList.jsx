import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
      <h1>Recipe List</h1>
      {recipes.map((recipe) => (
      <ul>
          <li key={recipe.idMeal}>{recipe.strMeal}</li>
          <li className='text-blue-400' key={recipe.idMeal}>{recipe.strTags}</li>
          <li className='text-red-400'key={recipe.idMeal}>{recipe.strCategory}</li>
          <li key={recipe.idMeal}><img className='w-[80px]' src={recipe.strMealThumb} alt={recipe.strMeal}/></li>
      </ul>
      ))}
    </div>
  )
}

export default RecipeList