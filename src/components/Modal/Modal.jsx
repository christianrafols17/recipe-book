import React from 'react';

const Modal = ({closeModal, selectedRecipe}) => {

  return (
    <>
        <div className='w-full h-full inset-0 fixed bg-black bg-opacity-50 flex md:px-12 justify-center items-center' onClick={closeModal}> 
            <div className='w-full h-full md:w-4/5 md:h-4/5 bg-gradient-to-br from-purple-200 to-white text-black p-4 rounded-md relative shadow-lg overflow-y-auto'>
              <h1 className='pt-1 pb-4 text-2xl font-bold'> {selectedRecipe.strMeal} </h1>
              
              <div className='flex flex-col md:flex-row gap-4 md:gap-10 w-full h-full'>
                <div className=' w-full md:w-3/5'>
                  <h2 className='pb-4 text-lg font-bold'>Ingredients: </h2>
                  <ul className='grid grid-cols-2 text-sm md:text-base'>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h2 className='py-4 text-lg font-bold' > Instructions: </h2>
                  <p className='text-justify text-sm md:text-base pb-4'> {selectedRecipe.strInstructions} </p>
                </div>
                <img src={selectedRecipe.strMealThumb} alt='Meal Image' className='w-full md:w-2/5 pb-4 md:pb-0'/>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Modal