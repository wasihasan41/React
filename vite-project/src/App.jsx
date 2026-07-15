import Demo from './react'
import axios from 'axios'

function App() { //App is a component, it must be always start with capital letter
  // <> </> its called Fragment react can run 1 block code at a time so we use these instead of <div></div>
  async function handleClick() {
    
    console.log("h")
    const data = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(data.data) 
  }
  const username = "React"; //creating variables // use {} for init vars; called evaluated expression as we cant write if else n all in this
  return (
    <>
      <h1>My Coding Academia {username}</h1>  
      <button onClick={handleClick}>Get data</button>

    </>
  )
}

export default App
