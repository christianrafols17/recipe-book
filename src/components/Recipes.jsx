import React, { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineClear } from 'react-icons/ai'
import axios from 'axios';
import Modal from './Modal/Modal';

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipesVisible, setRecipesVisible] = useState(true);

  const [searchRecipe, setSearchRecipe] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const [searchArea, setSearchArea] = useState('');
  const [searchAreaResults, setSearchAreaResults] = useState([]);

  const API_KEY = '1';

  const [modal, setModal] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  //Initial Meals
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

  //Search by Area
  useEffect(() => {
    if(searchArea.length > 0) {
      const apiAreaURL = `https://www.themealdb.com/api/json/v1/${API_KEY}/filter.php?a=${searchArea}`;
      axios.get(apiAreaURL)
      .then((response) => {
        const mealPromises = response.data.meals.map((meal) => {
          return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`)
        })
        return Promise.all(mealPromises);
      })
      .then((detailedMeals) => {
        setSearchAreaResults(detailedMeals.map((response) => response.data.meals[0]))
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      })
    }
  }, [searchArea]);

  //Search by Name
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
      setRecipesVisible(false);
      setSearchAreaResults([]);
    } else {
      setSearchResults([]);
    }
  }, [searchRecipe]); 

  //Sort out All Ingredients
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

  //Handle Search Bar Change
  const handleInputChange = (event) => {
    const selectedValue = event.target.value;
    setSearchRecipe(selectedValue);
  
    if (selectedValue === '') {
      setRecipesVisible(true);
    } else {
      setRecipesVisible(false);
    }
  };

  //Handle Dropdown Change
  const handleDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setSearchArea(selectedValue);
  
    if (selectedValue === '') {
      setRecipesVisible(true);
    } else {
      setRecipesVisible(false);
    }
  }
  
  //Open Modal
  const openModal = (meal) => {
    const ingredients = allIngredients(meal);
    meal.ingredients = ingredients;

    setSelectedRecipe(meal);
    setModal(true);
  }

  //Close Modal
  const closeModal = () => {
    setSelectedRecipe(null);
    setModal(false);
  };   

  //Clear Search Bar
  const clearSearchBar = () => {
    setSearchRecipe('');
    setRecipesVisible(true);
  }

  return (
  <div name="Recipes" className='w-full min-h-screen bg-gradient-to-b from-gray-200 to-indigo-200 px-4 md:px-24 pt-16 md:pt-24'>
      <div className='flex flex-row py-4 items-center'>
          <h1 className='text-2xl md:text-4xl font-bold w-1/3'>Recipes</h1>
          <div className='ms-auto flex flex-row items-center w-1/3'>
            <label className='text-lg hidden md:flex pe-2'>Sort By Country: </label>
            <select id='areaSelect' name='areaSelect' value={searchArea} onChange={handleDropdownChange} className='text-gray-400 p-2.5 bg-transparent border border-yellow-500 rounded-lg w-full md:w-1/2'>
              <option value=''>Select Country</option>
              <option value='Canadian'>Canada</option>
              <option value='Chinese'>China</option>
              <option value='Croatian'>Croatia</option>
              <option value='Egyptian'>Egypt</option>
              <option value='French'>France</option>
              <option value='Greek'>Greece</option>
              <option value='Indian'>India</option>
              <option value='Irish'>Ireland</option>
              <option value='Italian'>Italy</option>
              <option value='Jamaican'>Jamaica</option>
              <option value='Japanese'>Japan</option>
              <option value='Kenyan'>Kenya</option>
              <option value='Malaysian'>Malaysia</option>
              <option value='Mexican'>Mexico</option>
              <option value='Moroccan'>Morocco</option>
              <option value='Dutch'>Netherlands</option>
              <option value='Filipino'>Philippines</option>
              <option value='Polish'>Poland</option>
              <option value='Portuguese'>Portugal</option>
              <option value='Russian'>Russia</option>
              <option value='Spanish'>Spain</option>
              <option value='Thai'>Thailand</option>
              <option value='Tunisian'>Tunisia</option>
              <option value='Turkish'>Turkey</option>
              <option value='British'>UK</option>
              <option value='American'>USA</option>
              <option value='Vietnamese'>Vietnam</option>
            </select>
          </div>
          <span className=' border border-yellow-400 rounded-lg w-1/4 md:w-1/3 ms-auto p-2 flex flex-row items-center'>
              <input type='text' placeholder='Search Recipe' value={searchRecipe} onChange={handleInputChange} className='bg-transparent w-full focus:outline-none'/>
              <button className='' onClick={clearSearchBar}>  <AiOutlineClear size={24} className='hover:cursor-pointer ms-auto'/></button>
          </span>  
      </div>
      <h3 className='text-justify pb-4'>Welcome to our recipes section, a culinary haven where you can embark on a delicious journey, exploring a wide array of meticulously crafted dishes that cater to every palate and occasion.</h3>
      
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5'>
        
      {recipes && recipesVisible && recipes.map((meal) => (
        <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
          <figure className='relative object-cover h-4/6 '>
            <img className='w-full h-full rounded-t-md' src={meal.strMealThumb} alt={meal.strMeal}/>
            <figcaption className='w-1/2 flex justify-start text-sm absolute bottom-0 left-0 bg-white bg-opacity-75 p-2 ps-4 rounded-tr-md'>{meal.strCategory}</figcaption>
          </figure>
          <h1 className='text-base flex justify-center items-center font-semibold h-1/6'>{meal.strMeal}</h1>
          <button className='bg-white p-2 rounded-md h-1/6' onClick={() => openModal(meal)}>View Recipe</button>
        </div>
      ))}

      {searchAreaResults && 
        !recipesVisible &&
        searchAreaResults.map((meal) => (
          <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
            <figure className='relative object-cover h-4/6 '>
              <img className='w-full h-full rounded-t-md' src={meal.strMealThumb} alt={meal.strMeal}/>
              <figcaption className='w-1/2 flex justify-start text-sm absolute bottom-0 left-0 bg-white bg-opacity-75 p-2 ps-4 rounded-tr-md'>{meal.strCategory}</figcaption>
            </figure>
            <h1 className='text-base flex justify-center items-center font-semibold h-1/6'>{meal.strMeal}</h1>
            <button className='bg-white p-2 rounded-md' onClick={() => openModal(meal)}>View Recipe</button>
          </div>
      ))}

        {searchResults &&
          searchResults.length > 0 && 
          !recipesVisible && (
          searchResults.map((meal) => (
            <div key={meal.idMeal} className='duplicate bg-white bg-opacity-20 rounded-md flex flex-col h-[240px] justify-between text-center shadow-md'>
              <figure className='relative object-cover h-4/6 '>
                <img className='w-full h-full rounded-t-md' src={meal.strMealThumb} alt={meal.strMeal}/>
                <figcaption className='w-1/2 flex justify-start text-sm absolute bottom-0 left-0 bg-white bg-opacity-75 p-2 ps-4 rounded-tr-md'>{meal.strCategory}</figcaption>
              </figure>
              <h1 className='text-base flex justify-center items-center font-semibold h-1/6'>{meal.strMeal}</h1>
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