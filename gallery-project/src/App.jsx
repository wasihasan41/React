import { useState, useEffect } from 'react'
import axios from 'axios'
import Footer from './components/Footer'


function App() {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [selectedImage, setSelectedImage] = useState(null)

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=9`)
      const data = response.data
      setImages(data)
    } catch (error) {
      console.error('Net khol bhai')
    }
  }

  useEffect(() => {
    fetchData()
  }, [page])
  return (
    <>
    <div className="flex flex-wrap">
      {images.map((img, i) => {
        return (
          <div key={img.id} className="border border-amber-400 text-center m-1" >
            <img className="w-49" src={img.download_url} alt={'image'} style={{ height: `128px`}} onClick={()=>{setSelectedImage(img)}} />
            <h6>Image {(page - 1) * 9 + i + 1}</h6>
          </div>
        )
      })}
    </div>
    {
      selectedImage && 
      <div className='  inset-0 bg-black/60 backdrop-blur-sm h-screen fixed top-0 left-0 right-0 bottom-0 ' onClick={()=>{setSelectedImage(null)}}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-amber-400 border-2 h-[70%] w-[70%]">
          <img src={selectedImage.download_url} className=" flex  h-[80%] w-full"/>
          <h1 className='text-white text-2xl h-[20%] flex justify-center items-center'>Image {Number( selectedImage.id) + 1}</h1>
          
        </div>
      </div>
    }
    <Footer data={fetchData} setPage={setPage} page={page} />
    </>
    
  )
}

export default App