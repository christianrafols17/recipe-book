import { useState } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import RecipeList from './components/RecipeList/RecipeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <NavBar />
      <Home />
      <RecipeList />
      <Blog />
      <About />
    </div>
  )
}

export default App
