import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import DynamicRoute from './pages/DynamicRoute'
const App = () => {
  return (
    <div>
      <Link to={'/Home'}>Home</Link>
      <Link to={'/About'}>About</Link>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/About' element={<About/>}>
          <Route path='Contact' element={<Contact/>}/> 
          <Route path='Contact/:id' element={<DynamicRoute/>}/>
        </Route>
        <Route path='*' element={<Home/>}/>
      </Routes>
    </div>
  )
}

export default App