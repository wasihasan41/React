import Notes from './components/Notes'
import NotesData from './components/NotesData'
import { useState } from 'react'
function App() {
  const [display, set] = useState([])
  return (
    <div className="bg-black flex w-screen h-screen">
      <Notes set={set}/>
      <NotesData display={display} setter={set}/>
    </div>
  )
}
export default App