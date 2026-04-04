function Education() {
  return (
    <section className="bg-white text-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">

      <h2 className="text-2xl font-bold mb-4 border-l-4 border-blue-500 pl-2">
        Освіта
      </h2>

      <div className="space-y-4">

        <div>
          <h3 className="font-semibold text-lg">
            Львівська політехніка
          </h3>
          <p>Кібербезпека та захист інформації</p>
          <p className="text-sm text-gray-500">2023–2027</p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">
            Хотинський фаховий коледж
          </h3>
          <p>Облік і оподаткування</p>
          <p className="text-sm text-gray-500">2020–2023</p>
        </div>

      </div>
    </section>
  )
}

export default Education