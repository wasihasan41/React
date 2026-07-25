import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import Footer from './components/Footer'

function App() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [height, setHeight] = useState(128)


  const fetchData = async () => {
    try {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=9`)
    const data = response.data
    setImages(data)

    }catch (error) {
      console.error('Net khol bhai' )
    }
  }
  useEffect(() => { fetchData()}, [page])

  function zoom(){
    
    Object.assign(event.target.style, {
      position: 'fixed', 
      top: '50%',
      left: '50%'
    })
    console.log(height)
  }
  document.body.addEventListener('click', small)
  function small(){
    setHeight(128)
  }
  return (
    <div className="flex flex-wrap">
      {images.map((img, i)=>{
        return ( 
          <div key={img.id} className="border border-amber-400 text-center m-1" onClick={zoom} >
            <img className="w-49" src={img.download_url} alt={'image'} style={{height:`${height}px`, pointerEvents: 'none'}}  />
            <h6>Image {(page - 1) * 9 + i + 1}</h6>
          </div>
        )})
      }
      <Footer data={fetchData} setPage={setPage} page={page}/> 
      

    </div>
  )
}

export default App