import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 0;
  let [counter, setcounter] = useState(0);
  const addValue = () => {
    //counter = counter++; //it wont take effect cz react control UI updation not us
    // counter = counter + 1;
    if (counter < 20) {
      setcounter(counter + 1);

    }
  };
  const remValue = () => {
    counter = counter - 1;
    if (counter <= 0) {
      counter = 0
    }
    setcounter(counter);
  }
  return (
    <>
      <h1>co ding ding...</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={remValue}>Remove value</button>

    </>
  )
}

export default App
