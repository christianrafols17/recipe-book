import React, { useState } from 'react';
import { Link } from 'react-scroll';
import second from 'react-icons';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='w-full h-[62px] bg-gray-600 flex flex-row justify-between items-center px-4 md:px-24 fixed'>
      <div className='md:text-2xl text-green-600 font-bold italic'>
        <h1>Recipe Book</h1>
      </div>
      <div>

      </div>
      <div className='flex flex-row gap-4 md:text-lg'>
        <Link to="Home" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Home</Link>
        <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Recipes</Link>
        <Link to="Blog" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Blog</Link>
        <Link to="About" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>About Us</Link>
      </div>
    </div>
  )
}

export default Navbar