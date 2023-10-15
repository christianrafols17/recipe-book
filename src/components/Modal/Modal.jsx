import React from 'react'

const Modal = ({closeModal, selectedRecipe}) => {
  return (
    <>
        <div className='w-full h-full inset-0 fixed bg-black bg-opacity-50 flex px-12 justify-center items-center' onClick={closeModal}> 
            <div className=' w-4/5 min-h-[80%] bg-purple-200 text-black p-4 rounded-md relative shadow-lg'>
                <span className=" absolute top-5 right-5 hover:cursor-pointer hover:scale-125 duration-300">
                  <button value='x' className=' text-red-600' onClick={closeModal}/>
                </span>
                <h1 className='pt-1 pb-4 text-2xl font-bold'> {selectedRecipe.strMeal} </h1>
                <h2 className='pb-4 text-lg font-bold' > Instructions: </h2>
                <div className='flex flex-row gap-10 w-full h-full'>
                    <p className=" text-justify w-3/5"> {selectedRecipe.strInstructions} </p>
                    <img src={selectedRecipe.strMealThumb} alt='Meal Image' className='w-2/5'/>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Modal