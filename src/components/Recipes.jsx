import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import axios from 'axios';
import Modal from './Modal/Modal';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const [searchRecipe, setSearchRecipe] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchArea, setSearchArea] = useState('');
  const [searchAreaResults, setSearchAreaResults] = useState([]);

  const API_KEY = '1';

  const [modal, setModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const apiURL = `https://www.themealdb.com/api/json/v1/${API_KEY}/search.php?s=`;
    axios.get(apiURL)
    .then((response) => {
      setRecipes(response.data.meals);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }, []);

  useEffect(() => {
    const apiAreaURL = `https://www.themealdb.com/api/json/v1/${API_KEY}/filter.php?a=${searchArea}`;
    axios.get(apiAreaURL)
    .then((response) => {
      console.log('API Response for searchArea:', response.data);
      setSearchAreaResults(response.data.meals);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    })
  }, [searchArea]);

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

  const allIngredients = (meal) => {
    let ingredientsList = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];

      if (ingredient && measure) {
        ingredientsList.push(`${measure} ${ingredient}`);
      }
    }

    return ingredientsList;
  }

  const handleInputChange = (event) => {
    setSearchRecipe(event.target.value);
  };

  const handleDropdownChange = (event) => {
    setSearchArea(event.target.value);
  }

  const openModal = (meal) => {
    const ingredients = allIngredients(meal);
    meal.ingredients = ingredients;

    setSelectedRecipe(meal);
    setModal(true);
  }

  const closeModal = () => {
    setSelectedRecipe(null);
    setModal(false);
  };   

  console.log(searchArea)
  console.log(searchAreaResults)

  return (
  <div name="Recipes" className='w-full min-h-screen bg-gradient-to-b from-gray-200 to-indigo-200 px-4 md:px-24 pt-16 md:pt-24'>
      <div className='flex flex-row py-4 items-center'>
          <h1 className='text-2xl md:text-4xl font-bold'>Recipes</h1>
          <div className='ms-auto'>
            <label className='text-lg'>Sort By Country: </label>
            <select id='areaSelect' name='areaSelect' value={searchArea} onChange={handleDropdownChange} className='text-gray-400 p-2 border border-yellow-500 rounded-md'>
              <option value=''>Select Country</option>
              <option value='Canadian'>Canada</option>
              <option value='Chinese'>China</option>
              <option value='Filipino'>Philippines</option>
            </select>
          </div>
          <span className=' border border-yellow-400 rounded-lg w-2/4 md:w-1/3 ms-auto p-2 flex flex-row items-center'>
              <input type='text' placeholder='Search Recipe' value={searchRecipe} onChange={handleInputChange} className='bg-transparent w-full focus:outline-none'/>
              <input type='submit' value='' />  <BsSearch size={18} className='hover:cursor-pointer ms-auto'/>
          </span>  
      </div>
      <h3 className='text-justify pb-4'>Welcome to our recipes section, a culinary haven where you can embark on a delicious journey, exploring a wide array of meticulously crafted dishes that cater to every palate and occasion.</h3>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
        
        {recipes && recipes.map((meal) => (
          <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
            <img className='w-full h-1/2 object-cover rounded-t-md hover:scale-105 duration-200' src={meal.strMealThumb} alt={meal.strMeal}/>
            <h1 className='text-base font-semibold'>{meal.strMeal}</h1>
            <span className='text-sm'>{meal.strCategory}</span>
            <button className='bg-white p-2 rounded-md' onClick={() => openModal(meal)}>View Recipe</button>
          </div>
        ))}

        {searchAreaResults && 
          searchAreaResults.length > 0 &&
          searchAreaResults.map((meal) => (
            <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
              <img className='w-full h-1/2 object-cover rounded-t-md hover:scale-105 duration-200' src={meal.strMealThumb} alt={meal.strMeal}/>
              <h1 className='text-base font-semibold'>{meal.strMeal}</h1>
              <span className='text-sm'>{meal.strCategory}</span>
              <button className='bg-white p-2 rounded-md' onClick={() => openModal(meal)}>View Recipe</button>
            </div>
        ))}

        {searchResults &&
          searchResults.length > 0 && (
          searchResults.map((meal) => (
            <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
            <img className='w-full h-1/2 object-cover rounded-t-md hover:scale-105 duration-200' src={meal.strMealThumb} alt={meal.strMeal}/>
            <h1 className='text-base font-semibold'>{meal.strMeal}</h1>
            <span className='text-sm'>{meal.strCategory}</span>
            <button className='bg-white p-2 rounded-md' onClick={() => openModal(meal)}>View Recipe</button>
          </div>
          ))
        )}

        {(!searchResults || searchResults==='') && 
          <div className='text-xl'> No Result </div>
        }

        {modal && (
          <Modal closeModal={closeModal} selectedRecipe={selectedRecipe}/>
        )}
      </div>
  </div>
  );
}

export default Recipes