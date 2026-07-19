import Demo from './React'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() { //App is a component, it must be always start with capital letter
  // <> </> its called Fragment react can run 1 block code at a time so we use these instead of <div></div>
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)

  useEffect(function(){
    console.log("hello")
  },[num2]) //use empty array to make it run once only
  function handleClick(){
    setNum(num+1) //mounting : whenever statechanges useEffect runs
    console.log('num', num)

  }
  // async function handleClick() {
    
  //   console.log("h")
  //   const data = await axios.get("https://jsonplaceholder.typicode.com/users")
  //   console.log(data.data) 
  // }
  const username = "React"; //creating variables // use {} for init vars; called evaluated expression as we cant write if else n all in this
  return (
    <>
      <h1>My Coding Academia</h1>  
      <button onClick={handleClick} onDoubleClick={function(){
        setNum2(num2+1);
        console.log('num2', num2)

      }}>Get data</button>

    </>
  )
}

export default App
