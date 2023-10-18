import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='w-full h-[64px] bg-gray-600 flex flex-row justify-between items-center px-4 md:px-24 fixed'>
      <div className='md:text-2xl text-green-600 font-bold italic'>
        <h1>Recipe Book</h1>
      </div>
      <div className=' flex md:hidden hover:cursor-pointer' onClick={() => toggleMenu()}>
        <GiHamburgerMenu size={24} />
      </div>
      {menu && 
        <div className='w-full h-full inset-0 fixed bg-gray-600' onClick={() => toggleMenu()}>
          <div className='flex flex-col w-full h-screen justify-center items-center p-auto text-4xl gap-10'>
            <Link to="Home" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white' onClick={() => toggleMenu()}>Home</Link>
            <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white' onClick={() => toggleMenu()}>Recipes</Link>
            <Link to="Blog" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white' onClick={() => toggleMenu()}>Blog</Link>
            <Link to="About" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white' onClick={() => toggleMenu()}>About Us</Link>
          </div>
        </div>
      }
      <div className='hidden flex-row gap-6 md:text-lg md:flex'>
        <Link to="Home" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Home</Link>
        <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Recipes</Link>
        <Link to="Blog" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>Blog</Link>
        <Link to="About" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white'>About Us</Link>
      </div>
    </div>
  )
}

export default Navbar