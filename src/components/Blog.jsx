import React from 'react'
import FeaturedImage from '../assets/FeaturedImage.jpg'

const Blog = () => {
  return (
    <div className='w-full min-h-screen bg-gradient-to-b from-indigo-200 to-white ps-24'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold mx-auto pb-10'>Featured Recipe</h1>
            <div className='flex flex-row w-full gap-10'>
                <div className='w-3/5 gap-20 flex flex-col'>
                    <h1>Title</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quo exercitationem odit autem ad minima libero maxime debitis molestiae fugit!</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis corporis repellat dicta, dolor, totam impedit doloribus eveniet at nisi blanditiis odit inventore tempora provident dolore deserunt culpa! Cum, quas eos!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis delectus tenetur placeat, exercitationem esse quidem excepturi expedita error id quas rerum veritatis corporis dolores? Quasi natus nam saepe eligendi sit corporis neque, ipsam necessitatibus, rem minus pariatur voluptatem at. Doloribus eius harum nulla rem magni temporibus cupiditate incidunt expedita tenetur!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos, iste velit. Veniam excepturi vel est libero culpa molestias unde vitae incidunt praesentium eos! Dignissimos nesciunt non vel, aspernatur beatae repellendus totam molestiae? Nesciunt dignissimos illum omnis ratione laboriosam atque quo!</p>
                </div>
                <img src={ FeaturedImage } alt='Featured Image' className='w-2/5 h-screen'/>
            </div>
        </div>
    </div>
  )
}

export default Blog