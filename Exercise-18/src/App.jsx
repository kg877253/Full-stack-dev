import { useState, useEffect } from 'react'
import Card from './components/Cards.jsx'

function App() {
  const [data, setData] = useState([])//ek khali array banaya hai jisme hum data ko store karenge
  const [loading, setLoading] = useState(true)

  const fetchCardsData = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts")
      const posts = await res.json()
      setData(posts.slice(0, 100))//100 posts ko slice karke data state me store karrdiya hai
    } catch (err) {
      console.error("Fetch failed:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCardsData()
  }, [])//ek br rendering k time chlega bs

  if (loading) return <p>Loading...</p>
  if (!data) return <p>Failed to load data</p>

  return (
    <div className="h-auto w-full flex flex-wrap gap-4 p-4 justify-between p-10 bg-gradient-to-r from-purple-300 to-pink-400">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          userId={item.userId}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  )
}

export default App