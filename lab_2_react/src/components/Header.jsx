function Header() {
  return (
    <header className="flex flex-col items-center text-center p-8 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">

      <h1 className="text-4xl font-bold tracking-wide mb-2">
        Нестор Андрій
      </h1>

      <p className="text-xl opacity-90 mb-4">
        Junior System Administrator / Cybersecurity
      </p>

      <div className="space-y-1 text-sm">
        <p>📞 +380997351660</p>
        <p>✉ andrii.neestor@gmail.com</p>
        <p>📍 Lviv, Ukraine</p>
      </div>

      <a
        href="https://www.credly.com/users/andrii-nestor.d33819a2/badges"
        className="mt-4 px-4 py-2 bg-white text-blue-600 rounded-lg font-semibold shadow hover:bg-slate-200 hover:scale-105 transition"
      >
        Portfolio
      </a>

    </header>
  )
}

export default Header