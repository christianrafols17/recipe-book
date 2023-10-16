import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Blog = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);

  useEffect(() => {
    const apiURL = 'https://www.themealdb.com/api/json/v1/1/random.php';
    axios.get(apiURL)
      .then((response) => {
        setRandomRecipe(response.data.meals[0]);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const allIngredients = (randomRecipe) => {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = randomRecipe[`strIngredient${i}`];
      const measure = randomRecipe[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredientsList.push(`${measure} ${ingredient}`);
      }
    }

    return ingredientsList;
  }

  return (
    <div name='Blog' className='w-full min-h-screen bg-gradient-to-b from-indigo-200 to-white ps-24 pt-24 pb-10'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold mx-auto pb-10'>Random Dish Recipe</h1>
            {randomRecipe && (
            <div className='flex flex-row w-full gap-10'>
              
                <div className='w-3/5 flex flex-col'>
                    <h1 className='pb-8 font-bold text-2xl'>{ randomRecipe.strMeal }</h1>
                    <h2 className='pb-4 text-lg font-bold'>Ingredients: </h2>
                    <ul>
                      {allIngredients(randomRecipe).map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                    <h2 className='py-4 font-bold text-lg'>Instruction:</h2>
                    <span className=' text-justify'>{ randomRecipe.strInstructions }</span>
                </div>
                <img src={ randomRecipe.strMealThumb } alt='Featured Image' className='w-2/5 h-screen'/>
            </div>
            )}
        </div>
    </div>
  )
}

export default Blog