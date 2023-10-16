import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {

  return (
    <div className='w-full h-[62px] bg-gray-600 flex flex-row justify-between items-center px-24 fixed'>
      <div className='text-2xl text-green-600 font-bold italic'>
        <h1>Recipe Book</h1>
      </div>
      <div className='flex flex-row gap-4 text-lg'>
        <Link to="Home" smooth duration={500} className='hover:cursor-pointer text-white'>Home</Link>
        <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer text-white'>Recipes</Link>
        <Link to="Blog" smooth duration={500} className='hover:cursor-pointer text-white'>Blog</Link>
        <Link to="About" smooth duration={500} className='hover:cursor-pointer text-white'>About Us</Link>
      </div>
    </div>
  )
}

export default Navbar