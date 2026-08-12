import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to Store 🛍️</h1>
      <Link href="/products">
        <button>View Products</button>
      </Link>
    </div>
  )
}