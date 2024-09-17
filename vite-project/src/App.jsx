import Demo from './react'

function App() { //App is a component, it must be always start with capital letter
  // <> </> its called Fragment react can run 1 block code at a time so we use these instead of <div></div>
  const username = "React"; //creating variables // use {} for init vars; called evaluated expression as we cant write if else n all in this
  return (
    <>
      <h1>My Coding Academia {username}</h1>  
      <Demo />
    </>
  )
}

export default App
