import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// function MyApp(){
//   return(
//     <div>
//     <h1>Custom App</h1>
//     </div>
//   )
// }

const anotherElement = (
  <a href="https://google.com">Visit Google</a>
)

const anotherUser = "React"

const reactElement = React.createElement( // bable transpiler inject these
  'a',
  {
    href: "https://www.google.com",
    target: "_blank"
  },
  "Click me to visit google",
  anotherUser //use variables here in evaluated expressions
)

createRoot(document.getElementById('root')).render(
  reactElement
)