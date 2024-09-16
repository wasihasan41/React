import './App.css'
import Demo from './react'

function App() { //App is a component, it must be always start with capital letter
// <> </> its called Fragment react can run 1 block code at a time so we use these instead of <div></div>
  return (
    <> 
      <h1>My Coding Academia</h1> 
      <Demo />
    </>
  )
}

export default App
