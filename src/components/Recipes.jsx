import React from 'react'
import { BsSearch } from 'react-icons/bs'

const Recipes = () => {
    const counter = 20;

    const renderDuplicates = () => {
        const duplicateArray = Array.from({ length: counter }, (_, index) => (
          <div key={index} className='duplicate bg-green-200 p-2 rounded-md flex flex-col h-[240px] justify-between text-center'>
            <h1 className='text-lg font-semibold'>Title</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, quidem.</p>
            <button className='bg-white p-2 rounded-md'>View Recipe</button>
          </div>
        ));
    
        return duplicateArray;
    };
    
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
        {renderDuplicates()}
        </div>
    </div>
    );
}

export default Recipes