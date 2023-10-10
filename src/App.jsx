import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Recipes from './components/Recipes'
import Blog from './components/Blog'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <NavBar />
      <Home />
      <Recipes />
      <Blog />
      <About />
    </div>
  )
}

export default App