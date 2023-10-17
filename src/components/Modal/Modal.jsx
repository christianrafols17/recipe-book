import React from 'react';

const Modal = ({closeModal, selectedRecipe}) => {

  return (
    <>
        <div className='w-full h-full inset-0 fixed bg-black bg-opacity-50 flex px-12 justify-center items-center' onClick={closeModal}> 
            <div className=' w-4/5 h-4/5 bg-purple-200 text-black p-4 rounded-md relative shadow-lg overflow-y-auto'>
              <h1 className='pt-1 pb-4 text-2xl font-bold'> {selectedRecipe.strMeal} </h1>
              
              <div className='flex flex-row gap-10 w-full h-full'>
                <div className='text-justify w-3/5'>
                  <h2 className='pb-4 text-lg font-bold'>Ingredients: </h2>
                  <ul className='grid grid-cols-2'>
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h2 className='py-4 text-lg font-bold' > Instructions: </h2>
                  <p className=' pb-4'> {selectedRecipe.strInstructions} </p>
                </div>
                <img src={selectedRecipe.strMealThumb} alt='Meal Image' className='w-2/5'/>
              </div>
            </div>
        </div> 
    </>
  )
}

export default Modal