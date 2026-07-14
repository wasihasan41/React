
function NotesData({display, setter}){

    function remove(idx){
        setter((prev) => prev.filter((i, index) => index !== idx));
    }
    return(
        <>
        <div className=" p-5 h-screen w-[50%]">
            <h1 className="text-white font-black text-3xl mb-4">Recent Notes</h1>
            <div>
                {display.map((i, idx)=>
                    <>
                    <div key={idx} className=" border border-white mb-4 p-1.5 rounded h-30 w-[50%] relative">
                        <h1 className="text-white font-bold text-2xl border-b-2 pb-2">{i.heading}</h1>
                        <p className="text-white">{i.headData}</p>
                        <button onClick={()=>remove(idx)} className='text-white font-black text-4xl absolute top-0 right-2 cursor-pointer'>X</button>
                    </div>
                    </>
            )}
            </div>
        </div>
        </>
    )
}
export default NotesData