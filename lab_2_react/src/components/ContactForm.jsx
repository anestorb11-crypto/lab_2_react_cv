import { useEffect, useState } from "react"

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem("modalShown")) return
    const timer = setTimeout(() => setIsOpen(true), 60000)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("modalShown", "true")
  }

  const handleSubmit = () => {
    sessionStorage.setItem("modalShown", "true")
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center"
      onClick={(e) => e.target === e.currentTarget && handleClose()}
    >
      <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white border border-slate-600 rounded w-7 h-7 flex items-center justify-center"
        >
          ✕
        </button>
        <h3 className="text-white font-bold text-lg mb-4">Зворотній зв'язок</h3>
        <form
          action="https://formspree.io/f/xbdppjyj"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-3"
        >
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Ім'я</label>
            <input
              type="text"
              name="name"
              placeholder="Іван Петренко"
              required
              className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="ivan@example.com"
              required
              className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Телефон</label>
            <input
              type="tel"
              name="phone"
              placeholder="+380 XX XXX XXXX"
              className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Повідомлення</label>
            <textarea
              name="message"
              placeholder="Ваше повідомлення…"
              required
              rows={3}
              className="w-full bg-slate-900 border border-slate-600 rounded px-3 py-2 text-white text-sm outline-none focus:border-blue-500 resize-y"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded py-2 text-sm font-medium transition-colors"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
