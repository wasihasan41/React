import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <Link to={'/About/Contact'}>Contact</Link>
      <Outlet/>
    </div>
  )
}

export default About