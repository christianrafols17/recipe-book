import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  }

  return (
    <div className='w-full h-[64px] bg-gray-800 flex flex-row justify-between items-center px-4 md:px-24 fixed z-10'>
      <div className='md:text-2xl text-green-600 font-bold italic'>
        <h1 className='bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 bg-clip-text text-transparent'>Spoon&Spice</h1>
      </div>
      <div className=' flex md:hidden hover:cursor-pointer' onClick={() => toggleMenu()}>
        <GiHamburgerMenu size={24} className='text-white'/>
      </div>
      {menu && 
        <div className='w-full h-full inset-0 fixed bg-gray-800' onClick={() => toggleMenu()}>
          <div className='flex flex-col w-full h-screen justify-center items-center p-auto text-4xl gap-10'>
            <Link to="Home" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400' onClick={() => toggleMenu()}>Home</Link>
            <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400' onClick={() => toggleMenu()}>Recipes</Link>
            <Link to="Blog" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400' onClick={() => toggleMenu()}>Blog</Link>
            <Link to="About" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400' onClick={() => toggleMenu()}>About Us</Link>
          </div>
        </div>
      }
      <div className='hidden flex-row gap-6 md:text-lg md:flex'>
        <Link to="Home" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400'>Home</Link>
        <Link to="Recipes" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400'>Recipes</Link>
        <Link to="Blog" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400'>Blog</Link>
        <Link to="About" smooth duration={500} className='hover:cursor-pointer hover:scale-110 duration-300 hover:font-bold text-white hover:text-orange-400'>About Us</Link>
      </div>
    </div>
  )
}

export default Navbar