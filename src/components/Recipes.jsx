import React from 'react';
import { BsSearch } from 'react-icons/bs';

const Recipes = ({ recipes }) => {
    
    return (
    <div className='w-full min-h-screen bg-gradient-to-b from-gray-200 to-indigo-200 p-24'>
        <div className='flex flex-row py-4'>
            <h1 className='text-4xl font-bold'>Recipes</h1>
            <span className=' border border-yellow-400 rounded-lg w-1/3 ms-auto p-2 flex flex-row items-center'>
                <input type='text' placeholder='Search Recipe' className='bg-transparent w-full focus:outline-none'/>
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
        </div>
    </div>
    );
}

export default Recipes