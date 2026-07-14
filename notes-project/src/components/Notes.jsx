import { useState } from "react"
function Notes({set}){
    const [val, setVal] = useState({  heading:'', headData:''})
    
    function addNotes(e){
        e.preventDefault()
        set((prev)=>[...prev, {heading: val.heading, headData: val.headData}])
        setVal({heading:"", headData:""})
    }
    return(
        <>
        <div className="border-r-2 border-r-white p-5 h-screen  w-[50%]">
            <h1 className="text-white font-black text-3xl mb-4">Add Notes</h1>
            <form  className="  flex flex-col">
                <input 
                className="text-white bg-black border border-white mb-4 p-1.5 rounded"
                type="text"
                placeholder="Enter Notes Heading"
                value={val.heading} 
                onChange={(e)=> setVal({...val,heading : e.target.value})}/>
                <textarea  
                className="text-white bg-black border border-white mb-4 p-1.5 h-30 rounded" 
                type="text"
                placeholder="Write Details Here"
                value={val.headData} 
                onChange={(e)=> setVal({...val,headData : e.target.value})}
                />
                <button onClick={addNotes} className="bg-white text-black p-1.5 font-bold rounded" >Add Notes</button>
            </form>
        </div>
        </>
    )
}
export default Notes