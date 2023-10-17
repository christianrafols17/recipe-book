import React from 'react'
import HeroImage from '../assets/HeroImage.jpg'

const Home = () => {
  return (
    <div name="Home" className='w-full h-screen bg-gray-200 text-black pt-16'>
        <div className='w-full h-full flex flex-col md:flex-row md:pe-24 md:justify-center md:items-center gap-6 md:gap-10 '>
            <div className='w-full md:w-2/5 h-2/5 md:h-full'> 
                <img src={ HeroImage } alt="Dish Hero Image" className='h-full md:h-screen w-full'/>
            </div>
            <div className='w-full md:w-3/5 flex flex-col gap-6 md:gap-10'>
                <h1 className='text-green-800 text-2xl text-center md:text-4xl md:text-start font-bold'>Welcome to Recipe Book</h1>
                <p className=' px-4 text-justify'>Introducing our innovative recipe book web app, the culinary companion you've been waiting for. Explore a world of delectable dishes, save your favorite recipes, and create shopping lists with ease, all in one user-friendly platform designed to elevate your cooking experience.</p>
            </div>
        </div>
    </div>
  )
}

export default Home