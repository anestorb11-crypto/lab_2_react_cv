import { useEffect, useState } from "react"
import Header from "./components/Header"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Footer from "./components/Footer"
import Reviews from "./components/Reviews"
import ContactForm from "./components/ContactForm"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const saved = localStorage.getItem("theme")
    if (saved) {
      setTheme(saved)
    } else {
      const h = new Date().getHours()
      setTheme(h >= 7 && h < 21 ? "light" : "dark")
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      <Header />

      <button
        onClick={toggleTheme}
        className="fixed top-4 right-4 z-50 bg-slate-700 hover:bg-slate-600 text-white text-xs px-3 py-2 rounded border border-slate-500 transition-colors"
      >
        {theme === "dark" ? "☀ Денна" : "☾ Нічна"}
      </button>

      <main className="max-w-4xl mx-auto p-6 space-y-6">
        <Education />
        <Experience />
        <Skills />
        <Certificates />
        <Reviews />
      </main>

      <Footer />
      <ContactForm />
    </div>
  )
}

export default App