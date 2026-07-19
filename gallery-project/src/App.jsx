import {useState} from 'react'
import {useEffect} from 'react'
import axios from 'axios'
import Footer from './components/Footer'

function App() {

  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)

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
  return (
    <div className="flex flex-wrap">
      {images.map((img, i)=>{
        return ( 
          <div className="border border-amber-400 text-center m-1" >
            <img className="h-32 w-49" key={img.id} src={img.download_url} alt={'image'}/>
            <h6>Image {(page - 1) * 9 + i + 1}</h6>
          </div>
        )})
      }
      <Footer data={fetchData} setPage={setPage} page={page}/> 
    </div>
  )
}

export default App