import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numAllow, setNumAllow] = useState(true)
  const [charAllow, setCharAllow] = useState(true)
  const [pass, setPass] = useState("")

  const passRef = useRef(null)

  const passGen = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numAllow) str += "0123456789"
    if (charAllow) str += "!@#$%^&*_+-()"
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPass(pass)
  }, [length, charAllow, numAllow, setPass])

  const copyPass = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(pass)
  }, [pass])
  useEffect(() => {
    passGen();
  }, [length, numAllow, charAllow, passGen])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3
       my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={pass} placeholder='password' readOnly className='outline-none w-full py-0 px-3' ref={passRef} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center fap-x-1'>
            <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {
              setLength(e.target.value)
            }} />
            <label>Length: {length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numAllow} id='numberInput' onChange={() => {
              setNumAllow((prev) => !prev);
            }} />
            <label htmlFor="numberInput">Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllow} id='charInput' onChange={() => {
              setCharAllow((prev) => !prev);
            }} />
            <label htmlFor="charInput">Characters</label>

          </div>

        </div>
      </div>
    </>
  )
}

export default App
