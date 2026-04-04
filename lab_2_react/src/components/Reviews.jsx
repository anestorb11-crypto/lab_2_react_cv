import { useEffect, useState } from "react"

function Reviews() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/13/comments")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section className="p-6">
      <h2 className="text-xl font-bold text-white mb-4">Відгуки роботодавців</h2>
      {loading && <p className="text-gray-400">Завантаження відгуків…</p>}
      <div className="space-y-4">
        {reviews.map((c) => (
          <div key={c.id} className="bg-slate-800 rounded-lg p-4 border border-slate-700">
            <p className="font-semibold text-white text-sm">{c.name}</p>
            <p className="text-blue-400 text-xs mb-2">{c.email}</p>
            <p className="text-gray-400 text-sm">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
