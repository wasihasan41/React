import Link from 'next/link'
import { students } from './data'

export default function StudentsList() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📚 All Students List</h1>
      
      {students.map((student) => (
        <Link key={student.id} href={`/videos/${student.id}`}>
          <div style={{
            padding: '15px',
            border: '1px solid #ddd',
            marginBottom: '10px',
            cursor: 'pointer',
            borderRadius: '5px'
          }}>
            <h2>{student.name}</h2>
            <p>Age: {student.age}</p>
            <small>Click to see details →</small>
          </div>
        </Link>
      ))}
    </div>
  )
}