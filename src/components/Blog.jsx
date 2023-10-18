import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CookingTips from '../assets/CookingTips.jpg'

const Blog = () => {
  const [randomRecipe, setRandomRecipe] = useState(null);

  const cookingTips = [
    {
      id: 1,
      title: 'Start with Simple Recipes',
      description: 'Begin with straightforward recipes that have fewer ingredients and shorter cooking times. As you gain confidence, you can gradually tackle more complex dishes.'
    },
    {
      id: 2,
      title: 'Gather Your Ingredients',
      description: 'Before you start cooking, gather and prepare all your ingredients. This "mise en place" (everything in its place) approach will make the cooking process smoother and reduce the chances of making mistakes.'
    },
    {
      id: 3,
      title: 'Use the Right Tools',
      description: 'Invest in basic kitchen equipment, including sharp knives, a cutting board, pots, pans, and utensils. Having the right tools can make cooking more efficient and enjoyable.'
    },
    {
      id: 4,
      title: 'Learn Basic Cooking Techniques',
      description: 'Understanding fundamental cooking techniques like chopping, sautéing, roasting, and boiling is essential. These skills serve as building blocks for a wide range of recipes.'
    },
    {
      id: 5,
      title: 'Follow Recipes Carefully',
      description: `When you're starting out, follow recipes closely. Pay attention to measurements and cooking times. As you gain experience, you can begin to experiment and make adjustments.`
    },
    {
      id: 6,
      title: 'Taste as You Go',
      description: 'Regularly taste your food as it cooks. This helps you adjust seasoning and flavors as needed, ensuring your dish turns out delicious.'
    },
    {
      id: 7,
      title: 'Practice Food Safety',
      description: 'Learn about food safety principles, including proper hand washing, avoiding cross-contamination, and safe cooking temperatures. These practices are crucial to prevent foodborne illnesses.'
    },
    {
      id: 8,
      title: `Don't Be Afraid to Make Mistakes`,
      description: `Cooking is a learning process, and everyone makes mistakes in the kitchen. Don't be discouraged by failures; they are valuable learning opportunities. Embrace your errors and keep improving.`
    },
  ]

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
    <div name='Blog' className='w-full min-h-screen bg-gradient-to-b from-indigo-200 to-white pt-24 pb-10'>
        <h1 className='text-2xl md:text-4xl font-bold pb-10 ps-4 md:ps-24'>Cooking Tips</h1>
        <div className='flex flex-col-reverse md:flex-row pe-4 md:pe-24 pb-24 gap-10'>
          <img src={CookingTips} alt='Cooking-Tips-Hero-Image' className='w-2/5 shadow-md hidden lg:flex'/>
          <ol className=' list-decimal text-justify ps-8 md:ps-0'>
          {cookingTips.map(({ id, title, description }) => (
            <li key={ id }>
              <span className='text-xl font-bold'>{title}</span>
              <ul className=' list-inside'>
                <li className='text-sm md:text-base'>{description}</li>
              </ul>
            </li>
          ))}
          </ol>
        </div>
        <div className='flex flex-col ps-4 pe-4 md:pe-0 md:ps-24'>
          <h1 className='text-2xl md:text-4xl font-bold md:mx-auto pb-10'>Random Dish Recipe</h1>
          {randomRecipe && (
          <div className='flex flex-col md:flex-row w-full gap-10'>
            
              <div className='w-full md:w-3/5 flex flex-col md:flex-col'>
                  <h1 className='pb-8 font-bold text-lg md:text-2xl'>{ randomRecipe.strMeal }</h1>
                  <h2 className='pb-4 text-lg font-bold'>Ingredients: </h2>
                  <ul className='grid grid-cols-2'>
                    {allIngredients(randomRecipe).map((ingredient, index) => (
                      <li key={index} className='text-sm md:text-base'>{ingredient}</li>
                    ))}
                  </ul>
                  <h2 className='py-4 font-bold text-lg'>Instruction:</h2>
                  <span className=' text-justify text-sm md:text-base'>{ randomRecipe.strInstructions }</span>
              </div>
              <img src={ randomRecipe.strMealThumb } alt='Featured Image' className='w-full md:w-2/5 h-screen shadow-md'/>
          </div>
          )}
        </div>
    </div>
  )
}

export default Blog