import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Students Database📚</h1>
      <Link href="/students">
        <button>View students</button>
      </Link>
    </div>
  )
}