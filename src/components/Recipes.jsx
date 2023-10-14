import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios'

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchRecipe, setSearchRecipe] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const API_KEY = '1'; 

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

    useEffect(() => {
        const fetchMeals = async () => {
          try {
            const response = await fetch(
              `https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=${searchRecipe}`
            );
    
            if (response.ok) {
              const data = await response.json(); 
              setSearchResults(data.meals);
            } else {
              setSearchResults([]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
            setSearchResults([]);
          }
        };
    
        if (searchRecipe) {
          fetchMeals();
          setRecipes([]);
        } else {
          setSearchResults([]);
        }
    }, [searchRecipe]);

    const handleInputChange = (event) => {
        setSearchRecipe(event.target.value);
    };

    return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-200 to-indigo-200 p-24'>
        <div className='flex flex-row py-4'>
            <h1 className='text-4xl font-bold'>Recipes</h1>
            <span className=' border border-yellow-400 rounded-lg w-1/3 ms-auto p-2 flex flex-row items-center'>
                <input type='text' placeholder='Search Recipe' value={searchRecipe} onChange={handleInputChange} className='bg-transparent w-full focus:outline-none'/>
                <input type='submit' value='' />  <BsSearch size={18} className='hover:cursor-pointer ms-auto'/>
            </span>    
        </div>
        <div className='grid grid-cols-5 gap-5'>
         
            {recipes && recipes.map((recipe) => (
                <div key={recipe.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center'>
                    <img className='w-full h-1/2 object-cover rounded-t-md hover:scale-105 duration-200' src={recipe.strMealThumb} alt={recipe.strMeal}/>
                    <h1 className='text-base font-semibold'>{recipe.strMeal}</h1>
                    <span className='text-sm'>{recipe.strCategory}</span>
                    <button className='bg-white p-2 rounded-md'>View Recipe</button>
                </div>
            ))}

            {searchResults &&
                searchResults.length > 0 && (
                searchResults.map((meal) => (
                    <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center'>
                    <img className='w-full h-1/2 object-cover rounded-t-md hover:scale-105 duration-200' src={meal.strMealThumb} alt={meal.strMeal}/>
                    <h1 className='text-base font-semibold'>{meal.strMeal}</h1>
                    <span className='text-sm'>{meal.strCategory}</span>
                    <button className='bg-white p-2 rounded-md'>View Recipe</button>
                </div>
                ))
			)}

            {(!searchResults || searchResults==='') && 
                <div> No Result </div>
            }

        </div>
    </div>
    );
}

export default Recipes