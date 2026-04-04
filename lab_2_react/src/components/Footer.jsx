import { useEffect, useState } from "react"

function Footer() {
  const [sysInfo, setSysInfo] = useState(null)

  useEffect(() => {
    const info = {
      userAgent:  navigator.userAgent,
      platform:   navigator.platform,
      language:   navigator.language,
      cookiesOn:  navigator.cookieEnabled ? "Так" : "Ні",
      screenRes:  screen.width + " × " + screen.height,
      colorDepth: screen.colorDepth + " bit",
      online:     navigator.onLine ? "Так" : "Ні",
      timezone:   Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
    localStorage.setItem("sysInfo", JSON.stringify(info))
    setSysInfo(info)
  }, [])

  const labels = {
    userAgent:  "User Agent",
    platform:   "Платформа",
    language:   "Мова",
    cookiesOn:  "Cookies",
    screenRes:  "Роздільна здатність",
    colorDepth: "Глибина кольору",
    online:     "Онлайн",
    timezone:   "Часовий пояс",
  }

  return (
    <footer className="bg-slate-900 text-gray-400 p-6 mt-8">
      <p className="text-center text-sm mb-4">© 2026 Нестор Андрій</p>
      <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3">Системна інформація</h3>
      {sysInfo && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {Object.entries(sysInfo).map(([key, val]) => (
            <div key={key} className="flex gap-3 text-xs py-1 border-b border-slate-800">
              <span className="text-gray-600 min-w-[160px]">{labels[key] || key}</span>
              <span className="text-gray-400 break-all">{val}</span>
            </div>
          ))}
        </div>
      )}
    </footer>
  )
}

export default Footer
