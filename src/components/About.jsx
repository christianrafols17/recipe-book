import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-white to-gray-400 px-24 pt-24'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-bold pb-10'>About Us</h1>
            <div className='flex flex-col px-20 gap-10 text-justify'>
              <p>Our recipe book web app is a testament to my journey in web development, driven by the desire to acquire new skills, refine existing ones, and showcase my passion for creating user-friendly digital solutions. Crafted using the power of React JS, the versatility of Tailwind CSS, and the rapid development capabilities of Vite, this platform represents a fusion of creativity and technical expertise, all designed to provide an immersive cooking experience.</p>
              <p>At the heart of this web app lies a rich culinary library sourced from TheMealDB API, which offers a vast and diverse collection of recipes. It not only serves as a source of inspiration for both budding and experienced chefs but also demonstrates how technology can be harnessed to create practical tools for enthusiasts. From exploring new flavors to mastering the art of cooking, this app combines my journey in web development with my passion for culinary exploration, resulting in a valuable resource for food enthusiasts and tech aficionados alike.</p>
              <p>With this recipe book web app, I invite you to delve into a world where gastronomy and digital innovation intersect harmoniously. Whether you're a coding enthusiast or a food lover seeking new culinary adventures, this platform encapsulates the boundless possibilities that arise when technology is harnessed to enhance our culinary experiences, learn, and grow in the digital age.</p>
            </div>
        </div>
    </div>
  )
}

export default About