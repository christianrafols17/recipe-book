import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[62px] bg-gray-600 flex flex-row justify-between items-center px-24'>
      <div className='text-2xl text-green-600 font-bold italic'>
        <h1>Recipe Book</h1>
      </div>
      <div className='flex flex-row gap-4 text-lg'>
        <p className='hover:cursor-pointer text-white'>Home</p>
        <p className='hover:cursor-pointer text-white'>Recipe</p>
        <p className='hover:cursor-pointer text-white'>Blog</p>
        <p className='hover:cursor-pointer text-white'>About Us</p>
      </div>
    </div>
  )
}

export default Navbar