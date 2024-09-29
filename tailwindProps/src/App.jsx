import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1 className='bg-green-400 text-yellow-400 p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <div class="relative h-[400px] w-[300px] rounded-md">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMZ4_6RUVcm5y7wcVZtjI3CRM8Vb0jKbk7A&s" alt="" class="z-0 h-full w-full rounded-md object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">Endevour</h1>
          <p class="mt-2 text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum obcaecati perspiciatis sunt nostrum voluptas! Sit eum, nostrum pariatur officia atque in incidunt.</p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-black"> Go beyond</button>
        </div>
      </div>
    </>
  )
}

export default App
