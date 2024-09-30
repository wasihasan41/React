import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let obj={
  //   name: "wasi",
  //   age:20
  // }
  // props makes content reusable
  return (
    <>
      <h1 className='bg-green-400 text-yellow-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="shoto" btnText="Go Beyonddd" /*some={obj}*/ />
      <Card username = "endevour"/>


    </>
  )
}

export default App
