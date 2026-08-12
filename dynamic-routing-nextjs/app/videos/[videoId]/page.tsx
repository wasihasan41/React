// app/videos/[videoId]/page.js

import Link from 'next/link'
import { students } from '../data'

type Props = {
  params: Promise<{  // ✅ Type as Promise!
    videoId: string
  }>
}

// ✅ Make it async!
export default async function StudentDetail({ params }: Props) {
  // ✅ Await params!
  const { videoId } = await params
  
  const studentId = parseInt(videoId)
  const student = students.find(s => s.id === studentId)
  
  if (!student) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>❌ Student nahi mila!</h1>
        <p>Searched ID: {studentId}</p>
        <Link href="/videos">
          <button>Back to List</button>
        </Link>
      </div>
    )
  }
  
  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <Link href="/videos">
        <button>← Back to List</button>
      </Link>

      <h1>✅ {student.name}</h1>
      
      <div style={{
        background: '#f5f5f5',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '20px'
      }}>
        <p className='text-black'><strong>ID:</strong> {student.id}</p>
        <p className='text-black'><strong>Age:</strong> {student.age}</p>
        <p className='text-black'><strong>City:</strong> {student.city}</p>
      </div>

      <div style={{
        background: '#e7f3ff',
        padding: '15px',
        marginTop: '30px',
        borderRadius: '5px'
      }}>
        <p className='text-black'>
          <strong className='text-black'>Current URL:</strong> /videos/{student.id}
          <br />
          <strong className='text-black'>Dynamic Param:</strong> videoId = {videoId}
        </p>
      </div>
    </div>
  )
}