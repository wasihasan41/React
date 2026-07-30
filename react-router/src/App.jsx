import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <div>
      <Link to={'/JumpToHome'}>Home</Link>
      <Link to={'/JumpToAbout'}>About</Link>
      <Routes>
        <Route path='/JumpToHome' element={<Home/>}/>
        <Route path='/JumpToAbout' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App