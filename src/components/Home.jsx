import React from 'react'
import HeroImage from '../assets/HeroImage.jpg'

const Home = () => {
  return (
    <div className='w-full h-screen bg-gray-200 text-black'>
        <div className='w-full h-full flex flex-row pe-24 justify-center items-center gap-10 '>
            <div className='w-2/5 '> 
                <img src={ HeroImage } alt="Dish Hero Image" className='h-screen w-full'/>
            </div>
            <div className='w-3/5 flex flex-col gap-10'>
                <h1 className='text-green-800 text-4xl font-bold'>Welcome to Recipe Book</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit odit ipsum iusto officia ullam doloribus nostrum rerum ex debitis fugiat nulla eos deleniti molestiae, sint modi asperiores deserunt reprehenderit odio!</p>
            </div>
        </div>
    </div>
  )
}

export default Home